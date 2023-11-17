import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxios/useAxiosPublic";
import useAxios from "../../hooks/useAxios/useAxios";

const imageBbApiKey = import.meta.env.VITE_IMAGEBB_APIKEY;
const imageHostingAPi = `https://api.imgbb.com/1/upload?key=${imageBbApiKey}`;
const AddItem = () => {
  const axi = useAxios();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingAPi, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const image = res.data.data.display_url;
      // console.log(image);
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: image,
      };
      console.log(menuItem);
      const menuRes = await axi.post("/menu", menuItem);
      console.log(menuRes.data);
    }
  };
  return (
    <div className="max-w-6xl mx-auto">
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHeading={"What's new?"}
      ></SectionTitle>
      <section>
        <div className="w-full bg-[#F3F3F3]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full grid grid-cols-2 gap-5 px-20 py-14"
          >
            <div className="col-span-2  w-full">
              <label className="text-xl font-semibold" htmlFor="name">
                Recipe name<span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                className="w-full px-8 py-3 rounded-lg mt-2 focus:outline-none"
                placeholder="Enter your recipe name"
                {...register("name", { required: true })}
                type="text"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="w-full">
              <label className="text-xl font-semibold" htmlFor="category">
                Catagory<span className="text-red-600">*</span>
              </label>
              <select
                id="category"
                {...register("category", { required: true })}
                defaultValue={"default"}
                className="select select-bordered w-full focus:outline-none mt-2"
              >
                <option disabled value={"default"}>
                  Select a category
                </option>
                <option>Salad</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Drinks</option>
                <option>Offered</option>
              </select>
              {errors.category && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className=" w-full">
              <label className="text-xl font-semibold" htmlFor="price">
                Price<span className="text-red-600">*</span>
              </label>
              <input
                id="price"
                className="w-full px-8 py-3 rounded-lg mt-2 focus:outline-none"
                placeholder="Enter price"
                {...register("price", { required: true })}
                type="text"
              />
              {errors.price && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="col-span-2 w-full">
              <label className="text-xl font-semibold" htmlFor="recipe">
                Recipe<span className="text-red-600">*</span>
              </label>
              <textarea
                id="recipe"
                className="w-full px-8 py-3 rounded-lg mt-2 focus:outline-none"
                placeholder="Write your recipe here"
                rows={"10"}
                {...register("recipe", { required: true })}
                type="text"
              />
              {errors.recipe && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="w-full">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
              {/* <input
                className="w-full py-3 mt-2"
                placeholder="Choose file"
                type="file"
              /> */}
              {errors.image && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* Submit button */}
            <div className="col-span-2 flex justify-start mt-10">
              <button
                style={{
                  background:
                    "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
                }}
                className="btn rounded-none text-white"
                type="submit"
              >
                <span>Add Item</span>
                <FaUtensils></FaUtensils>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddItem;
