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
  Link,
  Text,
  HStack
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { PinInput, PinInputField } from '@chakra-ui/react'

const otpPage = () =>{
    const [data, setData] = useState([]);
    const router = useRouter();
    return (
        <Flex>
            <PinInput type='number'>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
            <Button  onClick={()=>otpCheck() } colorScheme="teal" mb={8}>
                Submit
            </Button>
        </Flex>
        
    )
    function otpCheck() {
        axios.post("http://localhost:5000/user/approve",{otp: otpPage})
        .then(res => {
          setData(res.data);
       })
       router.push('/')
      }
}
 
export default otpPage;