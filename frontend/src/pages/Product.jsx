import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router-dom"
import ProductHeader from "../components/ProductHeader"
import ProductDisplay from "../components/ProductDisplay"
import ProductDescription from "../components/ProductDescription"
import RelatedProduct from "../components/RelatedProduct"

export default function Product() {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))

  if (!product) {
    return <div>Product Not Found</div>
  }

  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductHeader product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <RelatedProduct />
      </div>
    </section>
  )
}
