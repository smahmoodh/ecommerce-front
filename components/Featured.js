import { useContext } from "react";
import styled from "styled-components";

import Center from "@/components/Center";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import { CartContext } from "@/components/CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
const Desc = styled.p`
  color: #aaa;
  font-size: .8rem;
  height: 97px;
  overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
  }
  div:nth-child(1){
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr .9fr;
    div:nth-child(1){
      order: 0;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const Featured = ({ product }) => {
    const { addProduct } = useContext(CartContext);
    const addFeaturedToCart = () => {
        addProduct(product._id);
    }
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>
                                {product.description}
                            </Desc>
                            <ButtonsWrapper>
                                <Button white={1} onClick={addFeaturedToCart}>
                                    اضافه به سبد
                                    <CartIcon />
                                </Button>
                                <ButtonLink
                                    href={'/product/' + product._id}
                                    outline={1} white={1}>
                                    ادامه مطلب
                                </ButtonLink>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img
                            src="https://res.cloudinary.com/dj0inpuxk/image/upload/v1688892619/wjLCj3S7zUydFwEWQZI9__fw.png"
                            alt="sony headphone" />
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    )
}

export default Featured


