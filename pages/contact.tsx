import React from 'react'
import Base from './base'
import Heading from './heading'
import Card from './card'
import CoffeeData from './coffee-data/data'
import axios from 'axios'
import { Flex } from '@chakra-ui/layout'

// axios({
//     method: 'Get',
//     url: ' http:192.168.    ',
//     headers:{
//         'Content-type': 'application/json'
//     },
//     data:{
//     name: data.name,
//     price: data.price,
//     src: data.picture
// }
//   },




  
//   )
    


const Contact = () => {
    return (
        <Base>
            <Flex className="bg-image-contact">
                <Flex className="bg-overlay">
                    <Flex className="content text-center">
                    </Flex>
                </Flex>
            </Flex>


            
           <Flex id="Бидэнтэй холбогдох" className="my-5">
            <Heading title="Бидэнтэй холбогдох" className="text-center my-3 py-2"/> 
            <Flex className="form container">
                <Flex className="row align-items-center ">
                        <Flex className="col-md-6  p-5 my-auto">
                            <img src="https://img4.goodfon.com/wallpaper/nbig/7/99/kofe-chashka-koritsa.jpg" alt="" width="100%"/>
                        </Flex>
                        <Flex className="col-md-6 col-sm-12 px-4 mx-auto">
                            <form name='contact' method='POST' data-netlify="true">
                                <input type='hidden' name='form-name' value='contact' />
                                <input type="text" placeholder="Таны нэр" required  name="name" />
                                <input type="email" placeholder="Таны Email" required name="email" />
                                <textarea  placeholder="Message" required name="message"></textarea>
                                <button> Message илгээх</button>
                            </form>
                        </Flex>
                </Flex>
            </Flex>
           </Flex>

           <Flex>
                <Heading title="Зарагдаж буй" className="text-center my-5 py-3"/>
                <Flex className="container">
                        <Flex className="row justify-content-center">
                                {CoffeeData.slice(0, 4).map(({name, src, price, }, index) => {
                                    return (
                                    <Flex className="col-md-3 col-sm-6 mb-5">
                                        <Card 
                                                name={name}
                                                src={src}
                                                price={price} description={undefined}                                        />
                                    </Flex>
                                    )
                                })}  
                        </Flex>
                </Flex>
           </Flex>
            
        </Base>
    )
}

export default Contact
