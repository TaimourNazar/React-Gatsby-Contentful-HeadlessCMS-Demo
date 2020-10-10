import React from 'react';
import Layout from '../components/Layout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Product({pageContext}){
    
    const {itemDetails} = pageContext
    return <Layout headerTitle={"Electronics"}>
            <h1>{itemDetails.title}</h1>
            <h3>Description</h3>
            <p>{documentToReactComponents(itemDetails.description.json)}</p>
        </Layout>
    
}