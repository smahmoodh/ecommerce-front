import styled from "styled-components";
import { mongooseConnect } from '@/lib/mongoose'
import { Category } from '@/models/Category'

import Layout from '@/components/Layout'

const CategoriesWrapper = styled.div`
    padding: 25px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:10px;
`;
const CategoryCard = styled.div`
    border: 1px solid rgb(85 66 246 / 45%);
    border-radius: 5px;
    box-shadow: 0 0 4px 0px rgba(0 0 0/30%)
`;
const ParentTitle = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 1px solid rgb(85 66 246 / 45%);
    color: #5542F6
`;
const CategoriesChilds = styled.ul`
    li{
        list-style: none;
        a{
            text-decoration: none;
        }
    }
    li:hover{
        list-style: disc;
    }
`;


const CategoriesPage = ({ categories }) => {

  return (
      <Layout>
          <CategoriesWrapper id="menu">
              {categories.map((item) => {
                  if (item.parent) {
                      return null;
                  }

                  return (
                      <CategoryCard key={item._id}>
                          <ParentTitle href={`/products?id=${item._id}`}>
                              {item.name}
                          </ParentTitle>

                          {categories.some((child) => child.parent === item._id) && (
                              <CategoriesChilds className="submenu">
                                  {categories.map((child) => {
                                      if (child.parent === item._id) {
                                          return (
                                              <li key={child._id}>
                                                  <a href={`/products?id=${child._id}`}>
                                                      {child.name}
                                                  </a>
                                              </li>
                                          );
                                      }
                                      return null;
                                  })}
                              </CategoriesChilds>
                          )}
                      </CategoryCard>
                  );
              })}
          </CategoriesWrapper>
      </Layout>
  )
}

export default CategoriesPage

export const getServerSideProps = async () => {
    await mongooseConnect();
    const categories = await Category.find();
    console.log(categories);
    return {
        props: {
            categories: JSON.parse(JSON.stringify(categories))
        }
    }
}