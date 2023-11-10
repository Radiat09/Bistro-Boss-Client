import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Categories from "../Categories/Categories";
import ChefRecomends from "../ChefRecomends/ChefRecomends";
import ChefService from "../ChefService/ChefService";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecomends></ChefRecomends>
      <FeaturedItem></FeaturedItem>
    </div>
  );
};

export default Home;
