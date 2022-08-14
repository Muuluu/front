import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const [ password, setPassword] = useState("");
  const [ username, setUsername] = useState("");
  const [ passwords, setPasswords] = useState([]);
  const [ usernames, setUsernames] = useState([]);
  const [data, setData] = useState([]);
 
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="username"
          type="username"
          variant="filled"
          mb={3}
          onChange={(e)=> {setUsername(e.target.value)}}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
          onChange={(e)=> {setPassword(e.target.value)}}
        />
        <Button onClick={()=>login() } colorScheme="teal" mb={8}>
          Log In
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
  function login() {
    setUsernames([...usernames, username])
    setPasswords([...passwords, password])
    axios.post("http://localhost:5000/user/signIn",{username: username, password:password})
    .then(res => {
      setData(res.data);
      console.log(res.data)
      localStorage.setItem("refresh_token", "refresh_token")
      localStorage.setItem("access_token", "access_token")
      localStorage.setItem("id", "id")
   })
   router.push('/')
  }

  function doenstHaveAcc() {
    router.push('/signUp')
  }
  
}
export default Login;