import featured from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const FeaturedItem = () => {
  return (
    <div
      className="hero min-h-[80vh] my-40 bg-fixed"
      style={{
        backgroundImage: `url(${featured})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="w-full text-white">
        <SectionTitle
          heading="FROM OUR MENU"
          subHeading="Check it out"
        ></SectionTitle>
        <div className="hero-content text-neutral-content mx-auto">
          <div className="max-w-6xl flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <img src={featured} className="w-full" alt="" />
            </div>
            <div className="text-white flex-1 flex flex-col justify-center items-start gap-3">
              <h4 className="text-2xl font-semibold">March 20, 2023</h4>
              <h4 className="text-2xl font-semibold"> WHERE CAN I GET SOME?</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn border-0 text-white bg-transparent rounded-b-xl border-b-4 hover:border hover:bg-transparent">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
