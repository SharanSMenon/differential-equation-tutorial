import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import "../styles/index.scss"
import './layout.scss'
const Layout = (props) => {
    return (
        <div className="container">
            <div className="content">
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;