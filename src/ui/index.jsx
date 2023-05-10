import React, { Component } from 'react';
import Navbar from '../components/navbar';
import '../asset/global.css'
import Home from '../pages/home';
import Footer from '../components/footer';


export default class Layout extends Component {
    render() {
        return(
            <>
                <Navbar/>
                <Home/>
                <Footer/>
            </>
        )
    }
}