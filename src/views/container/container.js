import React from 'react';
import Intro from "./intro/intro";
import Portfolio from "./portfolio/portfolio";
import About from "./about/about";
import Contact from "./contact/contact";
import Footer from "./footer/footer";


export default function Container() {
    return (
        <>
            <Intro />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </>
    );
}
