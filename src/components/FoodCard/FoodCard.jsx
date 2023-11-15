import Swal from "sweetalert2";
import img from "../../assets/home/slide1.jpg";
import useAuth from "../../hooks/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios/useAxios";
import useCart from "../../hooks/useCart/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axi = useAxios();
  const [, refetch] = useCart();
  const { name, recipe, image, price, _id } = item;

  const handleAddToCart = () => {
    if (user && user.email) {
      console.log(user);
      const cartItem = {
        email: user?.email,
        menuId: _id,
        name,
        image,
        price,
      };

      axi.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Item added to cart",
            showConfirmButton: false,
            timer: 1500,
          });

          // refetch the card to update the card count
          refetch();
        }
        // console.log(res.data.insertedId);
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please Login to Order!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            <button
              onClick={handleAddToCart}
              className="btn hover:btn-neutral text-yellow-600 bg-[#E8E8E8] border-b-4 border-yellow-600 hover:text-yellow-600"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
};
export default FoodCard;
