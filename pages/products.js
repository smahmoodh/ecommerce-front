import styled from "styled-components";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";

import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import Layout from "@/components/Layout";

const ProductsPage = ({products}) => {
    return (
        <>
            <Layout>
                <Title>All products</Title>
                <ProductsGrid products={products}/>
            </Layout>
        </>
    )
}

export default ProductsPage

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    await mongooseConnect();
    let products;
    if (id) {
        products = await Product.find({ category: { $eq: id } }, null, { sort: { '_id': -1 } });
    } else {
        products = await Product.find({}, null, { sort: { '_id': -1 } });
    }
    
    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}
