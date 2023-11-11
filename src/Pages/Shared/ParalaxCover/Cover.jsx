const Cover = ({ img, menuTitle, menuSubTitle }) => {
  return (
    <div
      className="hero min-h-[80vh]  bg-fixed"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="w-full ">
        <div className="hero-content h-[500px] text-neutral-content bg-black bg-opacity-50 mx-auto">
          <div className="max-w-6xl text-center text-white">
            <h2 className="text-8xl font-bold mb-8">{menuTitle}</h2>
            <p className="text-2xl font-semibold">{menuSubTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
