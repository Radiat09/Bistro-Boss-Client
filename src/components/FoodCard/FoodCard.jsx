import img from "../../assets/home/slide1.jpg";
const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div>
      <div className="card bg-[#F3F3F3]  rounded-none text-center">
        <figure className="w-full ">
          <img src={image ? image : img} className="w-full " alt="Shoes" />
        </figure>
        <p className="absolute top-3 right-3 text-white bg-slate-800  py-1 px-3">
          ${price ? price : "10"}
        </p>
        <div className="card-body">
          <h2 className="card-title justify-center">
            {name ? name : "Caeser Salad"}
          </h2>
          <p className="h-[72px]">
            {recipe
              ? recipe
              : "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
          </p>
          <div className="card-actions justify-center">
            <button className="btn hover:btn-neutral text-yellow-600 bg-[#E8E8E8] border-b-4 border-yellow-600 hover:text-yellow-600">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
