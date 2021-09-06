import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import "../styles/index.scss"
import './layout.scss'
const Layout = (props) => {
    const darkMode = props.darkMode;
    console.log(darkMode);
    let classString = "bodybox " + (darkMode ? "dark" : "")
    console.log(classString);
    return (
        <div className={classString}>

            <div className="container">
                <div className="content">
                    <Header />
                    {props.children}
                
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout;