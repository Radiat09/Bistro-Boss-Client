import Cover from "../Shared/ParalaxCover/Cover";
import contactImg from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContactCard from "../../components/ContactCard/ContactCard";

const ContactUs = () => {
  return (
    <div>
      <Cover
        img={contactImg}
        menuTitle={"CONTACT US"}
        menuSubTitle={"Would you like to try a dish?"}
      ></Cover>
      <section className="my-10 max-w-7xl mx-auto gap-3">
        <SectionTitle
          heading={"Our location"}
          subHeading={"visit Us"}
        ></SectionTitle>
        <div className="grid grid-cols-3 gap-5">
          <ContactCard></ContactCard>
          <ContactCard></ContactCard>
          <ContactCard></ContactCard>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
