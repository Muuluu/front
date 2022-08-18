import { Flex } from '@chakra-ui/layout'
import React, {Fragment, useState} from 'react'
import { Link,withRouter} from 'react-dom'

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {color: "#ffe500" }
    } else {
        return {color: "#fff"}
    }
}
const Navbar = ({history}) => {
    const [scroll, setScroll] = useState(false)

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 35) {
            setScroll(true)
        } else {
           setScroll(false)
        }
    })

    return (
        <nav className="navbar navbar-expand-md  navbar-dark fixed-top " style={{backgroundColor: scroll ? "#29190d" : ""}} >
          
        <Flex className="container-fluid my-2">
            <Link style={currentTab(history, '/')} className="navbar-brand heading" to="/">Coffee Shop</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
                    <span className="navbar-toggler-icon"></span>
            </button>

            <Flex className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <Link style={currentTab(history, '/contact-us')} className="navbar-brand heading" to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </Flex>
        </Flex>
        
        </nav>    
    )
}

export default withRouter(Navbar);
