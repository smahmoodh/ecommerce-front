import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

import Title from "@/components/Title";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { CartContext } from "@/components/CartContext";
import { useContext } from "react";
import { enTofa } from "@/utils/Utilities";
import { Category } from "@/models/Category";
import Layout from "@/components/Layout";
import Link from "next/link";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .9fr 1.1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const Desc = styled.p`
text-align: justify;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;
const PropertyList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
    gap: 5px;
  li{
    line-height: 30px;
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 5px;
    
  }
  li span{
    padding: 5px 10px;
    background-color: rgba(255,255,255,40%);
  }
`;

const ProductPage = ({ product, properties }) => {
    const { addProduct } = useContext(CartContext);
    return (
        <>
            <Layout>
                <ColWrapper>
                    <WhiteBox>
                        <ProductImages images={product.images} />
                    </WhiteBox>
                    <div>
                        <Title>{product.title}</Title>
                        <p>
                            دسته بندی:&nbsp;
                            <Link href={`/products?id=${product.category._id}`}>{product.category.name}</Link>
                        </p>
                        <Desc>{product.description}</Desc>
                        <PropertyList>
                            {Object.entries(product.properties).map(([key, value]) => (
                                <li key={key}>
                                    <span>{key}</span>
                                    <span>{value}</span>
                                </li>
                            ))}
                        </PropertyList>
                        <PriceRow>
                            <div>
                                <Price>{enTofa(product.price)} تومان</Price>
                            </div>
                            <div>
                                <Button primary={1} onClick={() => addProduct(product._id)}>
                                    اضافه به سبد خرید
                                    <CartIcon />
                                </Button>
                            </div>
                        </PriceRow>

                    </div>
                </ColWrapper>
            </Layout>
        </>
    )
}

export default ProductPage

export const getServerSideProps = async (context) => {
    await mongooseConnect();
    const { id } = context.query;
    const product = await Product.findById(id);
    const properties = JSON.parse(JSON.stringify(product.properties));
    const catId = product.category;
    product.category = await Category.findById(catId);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
            properties: properties,
        }
    }
}


