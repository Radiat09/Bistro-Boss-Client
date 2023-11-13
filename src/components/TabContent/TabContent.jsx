import UseMenu from "../../hooks/UseMenu/UseMenu";
import FoodCard from "../FoodCard/FoodCard";

const TabContent = ({ fetchData }) => {
  const [menu] = UseMenu(fetchData);
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
      {menu.map((item) => (
        <FoodCard item={item} key={item._id}></FoodCard>
      ))}
    </div>
  );
};

export default TabContent;
