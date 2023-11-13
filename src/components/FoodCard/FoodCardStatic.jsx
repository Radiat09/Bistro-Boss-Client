import img from "../../assets/home/slide1.jpg";
const FoodCardStatic = () => {
  return (
    <div>
      <div className="card bg-[#F3F3F3]  rounded-none text-center">
        <figure className="w-full h-[300px]">
          <img src={img} className="w-full " alt="Shoes" />
        </figure>
        <p className="absolute top-3 right-3 text-white bg-slate-800  py-1 px-3">
          ${"10"}
        </p>
        <div className="card-body">
          <h2 className="card-title justify-center">{"Caeser Salad"}</h2>
          <p>{"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}</p>
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

export default FoodCardStatic;
