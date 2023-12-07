import { useContext } from "react";
import { TopRankingProductContext } from "../../contexts/homePage/TopRankingProductContext";
import {MdStarRate} from 'react-icons/md'

const TopRankingProducts = () => {
  //get products from top ranking context
  const { topRankProducts } = useContext(TopRankingProductContext);
  return (
    <div className="m-10">
      {/* Heading */}
      <h1 className="text-4xl text-slate-700 font-semibold p-2 mb-2 ml-2">Top Ranking</h1>

      {/* Category wise products */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2">
        {topRankProducts.map((product_category) => {
          return (
            <div key={product_category.category} className="mx-4">
              <h1 className="text-2xl font-semibold p-2 text-gray-700">{product_category.category}</h1>
              {product_category.products.map((product) => (
                <div key={product.title} className="flex w-full m-2 text-gray-600">
                  {/* product image */}
                  <div className="flex justify-center items-center h-[100px] w-[130px] p-1 m-1 bg-stone-200 rounded relative">
                    <img src={product.img} alt={product.title} className="object-contain h-full w-full"/>
                    <div className="absolute top-0 right-0 bg-red-500 text-white p-1 w-[25px] h-[20px] text-xs font-semibold flex items-center justify-center rounded-tr-md rounded-bl-md">{product.rank}</div>
                  </div>

                  {/* product details */}
                  <div className="w-2/3 p-1 m-1 font-semibold">
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-[#eb344c]">${product.prePrice} <span className="line-through text-slate-400">${product.currentPrice}</span></p>
                    <p className="flex items-center text-slate-400"><MdStarRate className="text-yellow-300"/><MdStarRate className="text-yellow-300"/><MdStarRate className="text-yellow-300"/><MdStarRate className="text-yellow-300"/><MdStarRate className="text-yellow-300"/><span className="text-xs">({product.NumberOfRating})</span></p>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRankingProducts;
