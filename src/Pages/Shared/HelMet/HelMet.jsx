import { Helmet } from "react-helmet-async";

const HelMet = ({ title }) => {
  return (
    <Helmet>
      <title>Bistro Boss | {title}</title>
    </Helmet>
  );
};

export default HelMet;
