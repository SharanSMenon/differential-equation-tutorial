import React from 'react';
import Layout from '../components/layout'
import { getDarkMode } from '../utils';

const AboutPage = () => {
    let darkMode = getDarkMode();
    return (
        <Layout darkMode={darkMode}>
            <h1>About</h1>
            <p>This is my notes on differential equations and their applications.</p>
            <h3>Some links</h3>
            <ol>
                <li><a href="https://blog.sharansajivmenon.now.sh">https://blog.sharansajivmenon.now.sh</a></li>
                <li><a href="https://sharansmenon.github.io">My Website</a></li>
            </ol>
        </Layout>
    )
}

export default AboutPage;