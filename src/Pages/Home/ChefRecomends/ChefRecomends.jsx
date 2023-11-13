import FoodCardStatic from "../../../components/FoodCard/FoodCardStatic";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRecomends = () => {
  return (
    <div className="max-w-7xl mx-auto my-40">
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should try"
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 gap-4">
        <FoodCardStatic></FoodCardStatic>
        <FoodCardStatic></FoodCardStatic>
        <FoodCardStatic></FoodCardStatic>
      </div>
    </div>
  );
};

export default ChefRecomends;
