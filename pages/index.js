import {Inter, Roboto} from 'next/font/google'
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import Header from "@/components/Header";
import Featured from "@/components/Featured";
import NewProducts from "@/components/NewProducts";

export default function Home({featuredProduct, newProducts}) {
    return (
        <div>
            <Header/>
            <Featured product={featuredProduct}/>
            <NewProducts products={newProducts}/>
        </div>
    )
}

export async function getServerSideProps() {
    const featuredProductId = '64aa750f35310b21bc496a10';
    await mongooseConnect();
    const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit: 10});
    return {
        props: {
            featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
            newProducts: JSON.parse(JSON.stringify(newProducts)),
        }
    }
}