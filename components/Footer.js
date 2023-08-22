import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const FooterStyled = styled.footer`
  background-color: #222;
`;
const ContainerFooter = styled.div`
  padding-top: 72px;
`;
const InnerWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 10px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
    }
}
`;
const FooterMenu = styled.div`
  span {
    color: rgba(255, 255, 255, 70%);
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 32px;
  }
  ul {
    padding-right: 10px;
    list-style: none;
  }
  li a {
    color: rgba(255, 255, 255, 60%);
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 14px;
    line-height: 24px;
    display: block;
  }
  li svg{
    width: 24px;
    height:24px;
    color: rgba(255, 255, 255, 60%);
  }
  ul.contact li{
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 14px;
  }
  ul.contact li a{
    margin: 0;
    direction: ltr;
    display:inline-block;
    margin-top: 2px;
  }
`;
const CopyrightBox = styled.div`
    border-top: 1px solid #5e5e5e;
    padding: 15px;
    p{
        margin:0;
        color: rgba(255, 255, 255, 70%);
    }
`;

const Footer = () => {
    return (
        <FooterStyled>
            <ContainerFooter>
                <Center>
                    <InnerWrapper>
                        <FooterMenu>
                            <span>راهنمای خرید</span>
                            <ul>
                                <li>
                                    <a href="#">ثبت سفارش</a>
                                </li>
                                <li>
                                    <a href="#">
                                        رویه ارسال سفارشات
                                    </a>
                                </li>
                                <li>
                                    <a href="#" >
                                        پیگیری سفارش
                                    </a>
                                </li>
                                <li>
                                    <a href="#" >
                                        راهنمای پرداخت
                                    </a>
                                </li>
                            </ul>
                        </FooterMenu>
                        <FooterMenu>
                            <span>خدمات مشتریان</span>
                            <ul>
                                <li>
                                    <a href="#">
                                        پاسخ به سوالات متداول
                                    </a>
                                </li>
                                <li>
                                    <a href="#" >
                                        رویه بازگرداندن کالا
                                    </a>
                                </li>
                                <li>
                                    <a href="#" >
                                        شرایط استفاده
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        حریم خصوصی
                                    </a>
                                </li>
                            </ul>
                        </FooterMenu>
                        <FooterMenu>
                            <span>راه‌های ارتباطی</span>
                            <ul className="contact">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <a href="tel:+989123456789">+989123456789</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    <a href="mailto:admin@domain.com">admin@domain.com</a>
                                </li>
                            </ul>
                        </FooterMenu>
                    </InnerWrapper>
                </Center>
                <CopyrightBox>
                    <Center>
                        <p>
                            © {new Date().getFullYear()} S.M.H ,  کليه حقوق اين سايت محفوظ می‌باشد
                        </p>
                    </Center>
                </CopyrightBox>
            </ContainerFooter>
        </FooterStyled>
    );
};

export default Footer;
