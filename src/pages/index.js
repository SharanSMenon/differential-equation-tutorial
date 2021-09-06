import React, {useState} from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'
import "./default.scss"

let darkMode = localStorage.getItem('darkMode') == "true"

const toggleDark = (drkmode) => {
  return !drkmode
}

const IndexPage = () => {
  const [dm, setdm] = useState(darkMode);
  return (
    <Layout darkMode={dm}>
      <title>Home | Differential Equations</title>
      <h1>Hello</h1>
      <p>This my notes on differential equations. Click Topics to get started</p>
      <button onClick={() => {
        darkMode = toggleDark(darkMode)
        setdm(darkMode)
        localStorage.setItem('darkMode', darkMode)
      }}>{darkMode ? "Light" : "Dark"} Mode</button>
    </Layout>
  )
}
export default IndexPage;