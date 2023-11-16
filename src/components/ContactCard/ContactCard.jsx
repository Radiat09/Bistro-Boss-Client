import PropTypes from "prop-types";

const ContactCard = ({ icon, mainText, subText1, subText2 }) => {
  return (
    <div className="grid grid-cols-1 items-center text-center border">
      <div className="w-full py-4 bg-[#D1A054] flex justify-center">{icon}</div>
      <div className="bg-[#F3F3F3] p-14 mx-5 mb-5 space-y-3">
        <h5 className="text-2xl font-medium uppercase">{mainText}</h5>
        {subText1 && <p>{subText1}</p>}
        <p className={subText2 ? "" : "text-[#F3F3F3] invisible"}>
          {subText2 ? subText2 : "No text"}
        </p>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  icon: PropTypes.node,
  mainText: PropTypes.string,
  subText1: PropTypes.string,
  subText2: PropTypes.string,
};
export default ContactCard;
