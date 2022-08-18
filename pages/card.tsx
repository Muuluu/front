import { Flex } from '@chakra-ui/layout';
import React from 'react'

const Card = ({src, name, price, description}) => {
    return (
        <Flex className="text-center ">
            <Flex className="px-2">
                <img src={src} alt={name} width="100%"/>
            </Flex>
            
            <Flex className="d-flex justify-content-between px-3 heading align-items-center">
                <Flex className=" mt-3 mb-1" style={{letterSpacing: "1.8px"}}>
                    <h5>{name}</h5>
                </Flex>

                <Flex className=" text-center p-2">
                {price}₮
                </Flex>
            </Flex>

            <Flex className="px-1" style={{opacity: "0.8"}}>
                {description}
            </Flex>
        </Flex>
    )
}

export default Card;
