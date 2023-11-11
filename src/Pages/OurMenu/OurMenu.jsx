import HelMet from "../Shared/HelMet/HelMet";
import Cover from "../Shared/ParalaxCover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import MenuGrid from "../../components/MenuGrid/MenuGrid";

const OurMenu = () => {
  return (
    <div>
      <HelMet title="Our Menu"></HelMet>
      {/* Offer Section */}
      <section>
        <Cover
          img={menuImg}
          menuTitle="Our Menu"
          menuSubTitle={"Would you like to try a dish?"}
        ></Cover>
        <div className="max-w-7xl mx-auto">
          <MenuGrid
            fetchData={"offered"}
            secTitle={"TODAY'S OFFER"}
            secSubTitle={"Don't miss"}
            buttonTxt={"ORDER YOUR FAVOURITE FOOD"}
          ></MenuGrid>
        </div>
      </section>
      {/* Offer Section End*/}
      {/* Dessert Section */}
      <section className="my-56">
        <Cover
          img={dessertImg}
          menuTitle="Desserts"
          menuSubTitle={"Would you like to try a dish?"}
        ></Cover>
        <div className="max-w-7xl mx-auto">
          <MenuGrid
            fetchData={"dessert"}
            secTitle={"Desserts"}
            secSubTitle={"Don't miss"}
            buttonTxt={"ORDER YOUR FAVOURITE FOOD"}
          ></MenuGrid>
        </div>
      </section>
      {/* Dessert Section End*/}
      {/* Pizza Section */}
      <section className="my-56">
        <Cover
          img={pizzaImg}
          menuTitle="Pizza"
          menuSubTitle={"Would you like to try a dish?"}
        ></Cover>
        <div className="max-w-7xl mx-auto">
          <MenuGrid
            fetchData={"pizza"}
            secTitle={"Pizza"}
            secSubTitle={"Don't miss"}
            buttonTxt={"ORDER YOUR FAVOURITE FOOD"}
          ></MenuGrid>
        </div>
      </section>
      {/* Pizza Section End*/}
      {/* Salad Section */}
      <section className="my-56">
        <Cover
          img={saladImg}
          menuTitle="Salad"
          menuSubTitle={"Would you like to try a dish?"}
        ></Cover>
        <div className="max-w-7xl mx-auto">
          <MenuGrid
            fetchData={"salad"}
            secTitle={"Salad"}
            secSubTitle={"Don't miss"}
            buttonTxt={"ORDER YOUR FAVOURITE FOOD"}
          ></MenuGrid>
        </div>
      </section>
      {/* Salad Section End*/}
      {/* Soup Section */}
      <section className="my-56">
        <Cover
          img={soupImg}
          menuTitle="Soup"
          menuSubTitle={"Would you like to try a dish?"}
        ></Cover>
        <div className="max-w-7xl mx-auto">
          <MenuGrid
            fetchData={"soup"}
            secTitle={"Soup"}
            secSubTitle={"Don't miss"}
            buttonTxt={"ORDER YOUR FAVOURITE FOOD"}
          ></MenuGrid>
        </div>
      </section>
      {/* Soup Section End*/}
    </div>
  );
};

export default OurMenu;
