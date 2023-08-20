import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import axios from "axios";

import {CartContext} from "@/components/CartContext";
import Header from "@/components/Header";
import Center from "@/components/Center";
import Button from "@/components/Button";
import Table from "@/components/Table";
import Input from "@/components/Input";
import WhiteBox from "@/components/WhiteBox";
import { enTofa } from "@/utils/Utilities";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
  font-size: 14px;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
const ProductImageBox = styled.div`
  width: 80px;
  height: 80px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 90%;
    max-height: 90%;
  }
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
    padding: 10px;
    img {
      max-width: 80%;
      max-height: 80%;
    }
  }
`;
const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;
const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`
const CartPage = () => {
    const {cartProducts, addProduct, removeProduct, clearCart} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', {ids: cartProducts})
                .then(response => {
                    setProducts(response.data)
                })
        } else {
            setProducts([]);
        }
    }, [cartProducts]);
    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        if (window?.location.href.includes('success')) {
            setIsSuccess(true);
            clearCart();
        }
    }, []);
    const increaseQuantity = (id) => {
        addProduct(id)
    }
    const decreaseQuantity = (id) => {
        removeProduct(id)
    }
    const goToPayment = async () => {
        const response = await axios.post('/api/checkout', {
            name,
            email,
            city,
            postalCode,
            streetAddress,
            country,
            cartProducts,
        })
        if (response.data.url) {
            window.location = response.data.url;
        }
    }
    let total = 0;
    for (const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price;
    }
    if (isSuccess) {
        return (
            <>
                <Header/>
                <Center>
                    <ColumnsWrapper>
                        <WhiteBox>
                            <h1>
                                از سفارش شما سپاس گزاریم
                            </h1>
                            <p>پس از ارسال، اطلاعات پیگیری سفارش برای شما ایمیل خواهد شد.</p>
                        </WhiteBox>
                    </ColumnsWrapper>
                </Center>
            </>
        )
    }
    return (
        <>
            <Header/>
            <Center>
                <ColumnsWrapper>
                    <WhiteBox>
                        <h2>سبد خرید</h2>
                        {!cartProducts?.length && (
                            <div>سبد خرید خالی است.</div>
                        )}
                        {products?.length && (
                            <Table>
                                <thead>
                                <tr>
                                    <th>کالا</th>
                                    <th>تعداد</th>
                                    <th>قیمت (تومان)</th>
                                </tr>
                                </thead>
                                <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <ProductInfoCell>
                                            <ProductImageBox>
                                                <Image width={150} height={150} src={product.images[0]} alt={product.title}/>
                                            </ProductImageBox>
                                            {product.title}
                                        </ProductInfoCell>
                                        <td>
                                            <Button onClick={() => decreaseQuantity(product._id)}>-</Button>
                                            <QuantityLabel>
                                                {cartProducts.filter(id => id === product._id).length}
                                            </QuantityLabel>
                                            <Button onClick={() => increaseQuantity(product._id)}>+</Button>
                                        </td>
                                        <td>
                                            {enTofa(cartProducts.filter(id => id === product._id).length * product.price)}
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={2}></td>
                                        <td>{enTofa(total)}</td>
                                </tr>
                                </tbody>
                            </Table>
                        )}
                    </WhiteBox>
                    {!!cartProducts?.length && (
                        <WhiteBox>
                            <h2>مشخصات</h2>
                            <form method='post' action='/api/checkout'>
                                <Input
                                    type="text"
                                    placeholder='نام'
                                    value={name}
                                    name='name'
                                    onChange={(e) => setName(e.target.value)}/>
                                <Input
                                    type="text"
                                    placeholder='ایمیل'
                                    value={email}
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}/>
                                <CityHolder>
                                    <Input
                                        type="text"
                                        placeholder='شهر'
                                        value={city}
                                        name='city'
                                        onChange={(e) => setCity(e.target.value)}/>
                                    <Input
                                        type="text"
                                        placeholder='کدپستی'
                                        value={postalCode}
                                        name='postalCode'
                                        onChange={(e) => setPostalCode(e.target.value)}/>
                                </CityHolder>
                                <Input
                                    type="text"
                                    placeholder='آدرس'
                                    value={streetAddress}
                                    name='streetAddress'
                                    onChange={(e) => setStreetAddress(e.target.value)}/>
                                <Input
                                    type="text"
                                    placeholder='کشور'
                                    value={country}
                                    name='country'
                                    onChange={(e) => setCountry(e.target.value)}/>
                                <Button black={1} block={1} onClick={goToPayment}>پرداخت آنلاین</Button>
                            </form>
                        </WhiteBox>
                    )}

                </ColumnsWrapper>
            </Center>

        </>
    )
}

export default CartPage


