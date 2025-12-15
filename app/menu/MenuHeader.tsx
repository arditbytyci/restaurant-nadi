const MenuHeader = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-20">
      <header className="text-6xl">What to eat at Nadi</header>
      <button className="text-xl w-1/3 rounded-full py-2 bg-secondary text-primary">
        Have a drink?
      </button>
    </div>
  );
};

export default MenuHeader;
