import React from 'react'
import Base from './base'
import Heading from './heading'
import Card from './card'
import axios from 'axios'
import CoffeeData from './coffee-data/data'
import { Flex } from '@chakra-ui/layout'

// axios({
//     method: 'Get',
//     url: 'http://localhost:9000/',
//     headers:{
//         'Content-type': 'application/json'
//     },
//     data:{
//     name: setProductName,
//     price: setPrice,
//     src: setImage,
// }
//   },

  
//   )


const Home = () => {
    return (
        <Base>
            <Flex className="bg-image">
                <Flex className="bg-overlay">
                    <Flex className="content text-center">
                        <h1 className="heading  mb-3 myFontSize">ELF Coffee Shop!</h1>
                        <h3 className="heading px-2">Тавтай морил!</h3>
                    </Flex>
                </Flex>
            </Flex>

            <>
                <Heading title="Зарагдаж буй coffee" className="text-center my-5 py-3"/>
                <div className="container">
                        <div className="row justify-content-center">
                                {CoffeeData.map(({name, src, price, }, index) => {
                                    return (
                                    <div className="col-md-3 col-sm-6 mb-5">
                                        <Card 
                                                name={name}
                                                src={src}
                                                price={price} description={undefined}                                        />
                                    </div>
                                    )
                                })}  
                        </div>
                </div>
           </>

            
            <div>
                <Heading title="Бидний тухай" className="text-center my-5 py-3"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 mb-4">
                            <img src="https://www.sciencenews.org/wp-content/uploads/2015/09/100315_coffee_opener_NEW_0.jpg" alt="about us" width="100%"/>
                        </div>
                        <div className="col-md-7 col-sm-12 my-auto">
                            <div className="content">
                                <p> Монголын анхны АЛТЕРНАТИВ сургууль. Амьдралд бэлэн ХҮЧИРХЭГ хүнийг бид 9-12-р ангиас нь бэлтгэнэ.</p>

                                <p>Боловсрол • Дадал зуршил • Зан төлөв • Хүмүүжил • Чадвар • Чадавхи • Мэдлэг • Соёл • Уламжлал • Эрүүл мэнд</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
          

        
           
           <div id="Бидэнтэй холбогдох" className="mb-5">
            <Heading title="Бидэнтэй холбогдох" className="text-center my-3 py-2"/> 
            <div className="form container">
                <div className="row align-items-center ">
                        <div className="col-md-6  p-5 my-auto">
                            <img src="https://img4.goodfon.com/wallpaper/nbig/7/99/kofe-chashka-koritsa.jpg" alt="" width="100%"/>
                        </div>
                        <div className="col-md-6 col-sm-12 px-4 mx-auto">
                            <form name='contact' method='POST' data-netlify="true">
                                <input type='hidden' name='form-name' value='contact' />
                                <input type="text" placeholder="Таны Name" required  name="name" />
                                <input type="email" placeholder="Таны Email" required name="email" />
                                <textarea  placeholder="Таны Message" required name="message"></textarea>
                                <button> Message илгээх</button>
                            </form>
                        </div>
                </div>
            </div>
           </div>
        </Base>
    )
}



export default Home
