import Cover from "../Shared/ParalaxCover/Cover";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabContent from "../../components/TabContent/TabContent";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HelMet from "../Shared/HelMet/HelMet";

const Order = () => {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks", "offered"];
  const initialIndex = categories.indexOf(category);
  // console.log(initialIndex);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  return (
    <div>
      <HelMet title="Order"></HelMet>
      <Cover
        img={orderCoverImg}
        menuTitle={"Our Shop"}
        menuSubTitle={"Would you like to try a dish?"}
      ></Cover>
      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="min-h-[70vh] my-20"
      >
        <TabList className="flex justify-center items-center mb-4 text-xl font-semibold border-b-2">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Offered</Tab>
        </TabList>

        <TabPanel>
          <TabContent fetchData={"salad"}></TabContent>
        </TabPanel>
        <TabPanel>
          <TabContent fetchData={"pizza"}></TabContent>
        </TabPanel>
        <TabPanel>
          <TabContent fetchData={"soup"}></TabContent>
        </TabPanel>
        <TabPanel>
          <TabContent fetchData={"dessert"}></TabContent>
        </TabPanel>
        <TabPanel>
          <TabContent fetchData={"drinks"}></TabContent>
        </TabPanel>
        <TabPanel>
          <TabContent fetchData={"offered"}></TabContent>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
