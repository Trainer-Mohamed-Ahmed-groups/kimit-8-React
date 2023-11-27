// eslint-disable-next-line react/prop-types
export default function SingleProduct({ productNum, name, children }) {
    return (
        <div>
            Product {name} num : {productNum}
            {children}
        </div>
    )
}
