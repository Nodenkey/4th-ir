import React from 'react';
import {Container} from "../components/toolbelt/toolbelt.style";
import ProductsLanding from "../components/products-landing/products-landing.component";
import InterestedTwo from "../components/interested/interested-two.component";
import ProductsVirtual from "../components/products-virtual/products-virtual.component";
import ProductsAdv from "../components/products-adv/products-adv.component";
import ProductsTransform from "../components/products-transform/products-transform.component";
import VirtualIntro from "../components/products-virtual-intro/virtual-intro.component";
import {Helmet} from "react-helmet";

const Products = () => {
    return (
        <Container style={{backgroundColor: '#F1F1F1'}}>
            <Helmet>
                <title>4th-IR | Products</title>
                <meta name="description"
                      content="Building the virtual workforce of the future."/>
            </Helmet>
            <ProductsLanding/>
            <VirtualIntro/>
            <ProductsVirtual/>
            <ProductsAdv/>
            <ProductsTransform/>
            <InterestedTwo/>
        </Container>
    );
};

export default Products;
