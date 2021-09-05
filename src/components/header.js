import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
// import "./header.module.scss"
import './header.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <header className="header">
            <h1 >
                <Link className="title" to="/">{data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link className="nav-item" activeClassName="active-nav-item" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-item" activeClassName="active-nav-item" to="/book">Topics</Link>
                    </li>
                    <li>
                        <Link className="nav-item" activeClassName="active-nav-item" to="/about">About</Link>
                    </li>
                    {/* <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link 
                            className={navItem} 
                            activeClassName={activeNavItem} to="/contact"
                        >Contact</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}
export default Header;