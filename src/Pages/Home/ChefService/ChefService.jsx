import chef from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div className="max-w-7xl mx-auto w-full h-fit relative my-40">
      <img
        src={chef}
        className="w-full"
        alt="an image of a chef giving service"
      />
      <div className="bg-white text-black w-[80%] mx-auto md:absolute top-[15%] left-[10%] md:p-20 p-5">
        <h2 className="text-5xl text-center mb-3">Bistro Boss</h2>
        <div className="xl:w-[762px] text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </div>
      </div>
    </div>
  );
};

export default ChefService;
