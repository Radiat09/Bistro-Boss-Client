import HelMet from "../../Shared/HelMet/HelMet";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Categories from "../Categories/Categories";
import ChefRecomends from "../ChefRecomends/ChefRecomends";
import ChefService from "../ChefService/ChefService";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <HelMet title={"Home"}></HelMet>
      <Banner></Banner>
      <Categories></Categories>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecomends></ChefRecomends>
      <FeaturedItem></FeaturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
