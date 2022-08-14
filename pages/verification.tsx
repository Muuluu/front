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
  Link,
  Center,
  Text,
  getToken,
  PinInput,
  PinInputField
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';

const signUpPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const [data, setData] = useState([]);
  const router = useRouter();
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Verification</Heading>
        
        <PinInput otp>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
        <Button  onClick={()=>otpCheck() } colorScheme="teal" mb={8}>
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
  function otpCheck() {
    axios.get("http://localhost:5000/user/approve",)
    .then(res => {
    setData(res.data);          
    localStorage.setItem("refresh_token", "refresh_token")
    localStorage.setItem("access_token", "access_token")
    })
    router.push('/')
    }

  
};



export default signUpPage;

// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Flex,
//   Heading,
//   Input,
//   Button,
//   FormControl,
//   FormLabel,
//   Switch,
//   useColorMode,
//   useColorModeValue,
//   Link,
//   Text,
//   HStack
// } from '@chakra-ui/react';
// import { useRouter } from 'next/router';
// import { ExternalLinkIcon } from '@chakra-ui/icons'
// import { PinInput, PinInputField } from '@chakra-ui/react'

// const otpPage = () =>{
//     const [data, setData] = useState([]);
//     const router = useRouter();
//     return (
//       <Flex h="100vh" alignItems="center" justifyContent="center">
//       <Flex
//         flexDirection="column"
//         bg={formBackground}
//         p={12}
//         borderRadius={8}
//         boxShadow="lg"
//       >
//         <Heading mb={6}>Sign Up</Heading>
        
        
//         <Button onClick={()=>otpCheck() } colorScheme="teal" mb={8}>
//           Log In
//         </Button>
//         <Flex>
//           <Center>
//             <Text>Already has account</Text>
//           </Center>
//         </Flex>
//         <Button onClick={()=>alreadyHasAcc() } colorScheme="teal" mb={8}>
//           Log In
//         </Button>
//         <FormControl display="flex" alignItems="center">
//           <FormLabel htmlFor="dark_mode" mb="0">
//             Enable Light Mode?
//           </FormLabel>
//           <Switch
//             id="dark_mode"
//             colorScheme="teal"
//             size="lg"
//             onChange={toggleColorMode}
//           />
//         </FormControl>
//       </Flex>
//     </Flex>
    
    
//   );
        
    
//     function otpCheck() {
//         axios.get("http://localhost:5000/user/approve",)
//         .then(res => {
//           setData(res.data);
        
            
//        })
//        router.push('/')
//       }
// }
 
// export default otpPage;