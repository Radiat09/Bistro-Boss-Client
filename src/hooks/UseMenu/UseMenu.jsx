import { useEffect, useState } from "react";

const UseMenu = (category) => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const menuData = data.filter((item) => item.category === category);
        // console.log(menuData);
        setMenu(menuData);
        setIsLoading(false);
      });
  }, [category]);
  return [menu, isLoading];
};

export default UseMenu;
