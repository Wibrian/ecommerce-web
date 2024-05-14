import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { TbTrash } from "react-icons/tb"

export default function CartItems() {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext)

  return (
    <section className="max_padd_container pt-28">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start py-12">
            <th className="p-1 py-2">Product</th>
            <th className="p-1 py-2">Title</th>
            <th className="p-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="p-1 py-2">Total</th>
            <th className="p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_product.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <tr key={product.id} className="border-b border-slate-900/20 text-gray-50 p-6 medium-14 text-center">
                  <td className="flexCenter ">
                    <img src={product.image} alt="product image" height={43} width={43} className="rounded-lg ring-1 ring-slate-900/5 my-1" />
                  </td>
                  <td>
                    <div className="line-clamp-3">{product.name}</div>
                  </td>
                  <td>${product.new_price}</td>
                  <td className="w-16 h-16 bg-white">{cartItems[product.id]}</td>
                  <td>${product.new_price * cartItems[product.id]}</td>
                  <td>
                    <div className="bold-22 flexCenter cursor-pointer">
                      <TbTrash onClick={() => removeFromCart(product.id)} />
                    </div>
                  </td>
                </tr>
              )
            }
            return null
          })}
        </tbody>
      </table>
      <div className="flex flex-col gap-10 my-16 p-8 rounded-md bg-white w-full max-w-[666px]">
        <div className="flex flex-col gap-10 ">
          <h4 className="bold-20">Summary</h4>
          <div>
            <div className="flexBetween py-4">
              <h4 className="medium-16">Subtotal: </h4>
              <h4 className="text-gray-30 font-semibold">${getTotalCartAmount()} </h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="medium-16">Shipping Fee:</h4>
              <h4 className="text-gray-30 font-semibold">${10.5}</h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="bold-18">Total:</h4>
              <h4 className="bold-18">${getTotalCartAmount() + 10.5}</h4>
            </div>
          </div>
        </div>
        <button className="btn_dark_rounded w-44">Checkout</button>
        <div className="flex flex-col gap-10">
          <h4 className="bold-20 capitalize">Your coupon code here:</h4>
          <div className="flexBetween pl-5 h-12 bg-primary rounded-full ring-1 ring-slate-900/10">
            <input type="text" placeholder="Coupon Code" className="bg-transparent border-none outline-none" />
            <button className="btn_dark_rounded">Use Coupon</button>
          </div>
        </div>
      </div>
    </section>
  )
}
