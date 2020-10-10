import React from "react";
import {Link, navigate} from "gatsby";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
  <Layout headerTitle="Index Page Header">
    <Header title="Home Page"/>
    Hello world!
    <br/>
    <Link to="/about">About</Link>
    <Link to="/product">Product</Link>
    <br/>
    <button onClick={()=>{
      navigate('/about')
    }}>About Page with button</button>
    <hr/>
    <h4>Material UI</h4>
    <Button variant="contained" color="primary">
        Hello from Material UI 
    </Button>
  </Layout>)
}
