import SectionTitle from "../SectionTitle/SectionTitle";
import UseMenu from "../../hooks/UseMenu/UseMenu";
import MenuItem from "../MenuItem/MenuItem";
import ButtonCus from "../ButtonCus/ButtonCus";

const MenuGrid = ({ fetchData, secTitle, secSubTitle, buttonTxt }) => {
  const [menu] = UseMenu(fetchData);
  return (
    <section className="my-14">
      <SectionTitle heading={secTitle} subHeading={secSubTitle}></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-6 mt-20 mx-2">
        {menu.map((menuItem) => (
          <MenuItem key={menuItem._id} menuItem={menuItem}></MenuItem>
        ))}
      </div>
      <ButtonCus btnText={buttonTxt}></ButtonCus>
    </section>
  );
};

export default MenuGrid;
