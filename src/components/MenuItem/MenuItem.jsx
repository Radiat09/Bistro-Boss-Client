const MenuItem = ({ menuItem }) => {
  const { name, recipe, price, image } = menuItem;
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-2 ">
      <img
        src={image}
        className="w-[100px] rounded-full rounded-tl-none"
        alt={`an image of ${name}`}
      />
      <div className="space-y-2">
        <h6 className="text-xl">{name} ------------------</h6>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
