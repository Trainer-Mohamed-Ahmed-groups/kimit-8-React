import SingleProduct from "../components/SingleProduct";

export default function Products() {
    return (
        <div>
            <h2>Products</h2>
            <SingleProduct productNum="1" name="test one">
                <p>I am in single product</p>
            </SingleProduct>
            <SingleProduct productNum="2" name="test two" />
            <SingleProduct productNum="3" name="test three" />
            <SingleProduct productNum="4" name="test four" />
        </div>
    )
}
