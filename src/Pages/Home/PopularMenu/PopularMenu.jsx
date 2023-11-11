import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";
import UseMenu from "../../../hooks/UseMenu/UseMenu";

const PopularMenu = () => {
  const [menu] = UseMenu("popular");
  // const popularMenu = menu.filter((menu) => menu.category === "popular");

  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       const popularMenu = data.filter((menu) => menu.category === "popular");
  //       setMenu(popularMenu);
  //     });
  // }, []);
  return (
    <section className="my-40 max-w-7xl mx-auto">
      <SectionTitle
        heading="From our menu"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-6 mt-20 mx-2">
        {menu.map((menuItem) => (
          <MenuItem key={menuItem._id} menuItem={menuItem}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-8 py-3 rounded-b-lg bg-white text-black  border-b-4 border-black hover:border transition-all duration-1000">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
