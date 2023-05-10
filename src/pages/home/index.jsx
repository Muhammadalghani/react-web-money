import React, { Component } from 'react';
import About from './About';
import Article from './Article';
import Hero from './Hero';

export default class Home extends Component {
    render(){
        return(
            <>
                <Hero/>
                <main id={"main"}>
                <About/>
                <Article/>
                </main>
            </>
        )
    }
}