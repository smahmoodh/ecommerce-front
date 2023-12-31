import React from 'react';
import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const ProductsGrid = ({products}) => {
    return (
        <StyledProductsGrid>
            {products.length > 0 && products.map(product => (
                <ProductBox {...product} key={product._id}/>
            ))}
        </StyledProductsGrid>
    )
}

export default ProductsGrid


