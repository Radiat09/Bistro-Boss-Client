const ButtonCus = ({ btnText }) => {
  return (
    <div className="flex justify-center mt-8">
      <button className="px-8 py-3 rounded-b-lg bg-white text-black  border-b-4 border-black hover:border transition-all duration-1000">
        {btnText}
      </button>
    </div>
  );
};

export default ButtonCus;
