import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const ProductWrapper = styled.div`

`;
const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  text-align: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const Title = styled(Link)`
  font-weight: normal;
  font-size: .9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
  min-height: 45px;
  max-height: 45px;
  display: block;
`;
const ProductInfoBox = styled.div`
  margin-top: 5px;
`;
const PriceRow = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;
const Price = styled.div`
  font-size: 1rem;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;
const ProductBox = ({_id, title, description, price, images}) => {
    const url = '/product/' + _id;
    const {addProduct} = useContext(CartContext);
    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                <div>
                    <Image width={150} height={150} src={images?.[0]} alt={title}/>
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={url}>
                    {title}
                </Title>
                <PriceRow>
                    <Price>
                        ${price}
                    </Price>
                    <Button onClick={()=> addProduct(_id)} primary={1} outline={1}>
                        Add to cart
                    </Button>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    )
}

export default ProductBox


