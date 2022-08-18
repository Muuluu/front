import { useState } from 'react';
import React from 'react';
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
  Text,
  Center, } 
from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';

const signUpPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const [ password, setPassword] = useState("");
  const [ username, setUsername] = useState("");
  const [ email, setEmail] = useState("");
  const [ reEnterpassword, setReEnterPassword] = useState("");
  const [ phoneNum, setPhoneNum] = useState("");
  const [data, setData] = useState([]);
  const [ passwords, setPasswords] = useState([]);
  const [ usernames, setUsernames] = useState([]);
  const [ emails, setEmails] = useState([]);
  const [ reEnterpasswords, setReEnterPasswords] = useState([]);
  const [ phoneNums, setPhoneNums] = useState([]);
  const router = useRouter();
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Sign Up</Heading>
        <Input
          placeholder="example@gmail.com"
          type="email"
          variant="filled"
          mb={3}
          onChange={(e)=> {setEmail(e.target.value)}}
        />
        <Input
          placeholder="password"
          type="password"
          variant="filled"
          mb={3}
          onChange={(e)=> {setPassword(e.target.value)}}
        />
        <Input
          placeholder="re-enter your password"
          type="password"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="username"
          type="username"
          variant="filled"
          mb={3}
          onChange={(e)=> {setUsername(e.target.value)}}
        /> 
        <Input
          placeholder="phone number"
          type="phone Number"
          variant="filled"
          mb={3}
          onChange={(e)=> {setPhoneNum(e.target.value)}}
        /> 
        
        <Button onClick={()=>createUser() } colorScheme="teal" mb={8}>
          Sign Up
        </Button>
        <Flex>
          <Center>
          <Text> Already have an account </Text>
          </Center>
        </Flex>
        <Button onClick={()=>alreadyHasAcc() } colorScheme="teal" mb={8}>
          Log In
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Light Mode?
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
  function createUser() {
    setUsernames([...usernames, username])
    setPasswords([...passwords, password])
    setEmails([...emails, email])
    setPhoneNums([...phoneNums, phoneNum])
    axios.post("http://localhost:5000/user/create",{username: username, password:password, email:email, phoneNum:phoneNum})
    .then(res => {
      setData(res.data);
      console.log(res.data)
      localStorage.setItem("id", "id")
   })
   router.push('/verification')
  }

  function alreadyHasAcc() {
    router.push('/login')
  }
};



export default signUpPage;