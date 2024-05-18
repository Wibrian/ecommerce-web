import { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";

export default function ListProduct() {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((resp) => resp.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <div className="p-2 box-border bg-white mb-0 rounded-sm w-full sm:p-4">
      <h4 className="bold-22 p-5 uppercase">Product List</h4>
      <div className="max-h-[77vh] overflow-auto px-4 text-center">
        <table className="w-full mx-auto">
          <thead>
            <tr className="bg-primary bold-14 sm:regular-22 text-start py-12">
              <th className="p-2">Products</th>
              <th className="p-2">Title</th>
              <th className="p-2">Old Price</th>
              <th className="p-2">New Price</th>
              <th className="p-2">Category</th>
              <th className="p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((products, index) => (
              <tr key={index} className="border-b border-slate-900/20 text-gray-20 p-6 medium-14 ">
                <td className="flexStart sm:flexCenter">
                  <img src={products.image} alt="product image" height={43} width={43} className="rounded-lg ring-1 ring-slate-900/5 my-1" />
                </td>
                <td>
                  <div className="line-clamp-3">{products.name}</div>
                </td>
                <td>${products.old_price}</td>
                <td>${products.new_price}</td>
                <td>{products.category}</td>
                <td>
                  <div className="bold-22 pl-6 sm:pl-14">
                    <TbTrash onClick={() => removeProduct(products.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
