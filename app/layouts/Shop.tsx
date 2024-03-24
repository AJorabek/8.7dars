const Shop = () => {
  return (
    <div className="shop margin">
      <div className="container">
        <h3 className="text-center text-3xl">All Furniture</h3>
        <ul className="flex flex-wrap gap-16 justify-center mt-10">
          <li className="cursor-pointer">Shop By Room</li>
          <li className="cursor-pointer">Shop By Category</li>
          <li className="cursor-pointer">Shop By Style</li>
        </ul>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
            <img src="/furnitures.png" width={552} height={389} alt="furnitures img" />
            <ul className="flex-wrap grid grid-cols-2 gap-10 ">
                <li className="flex flex-col items-center w-full max-w-56 room_li cursor-pointer gap-5">
                    <img src="/room.svg" width={24} height={24} alt="room icon" />
                    <h3>Living room</h3>
                </li>
                <li className="flex flex-col items-center w-full max-w-56 room_li cursor-pointer gap-5">
                    <img src="/room.svg" width={24} height={24} alt="room icon" />
                    <h3>Living room</h3>
                </li>
                <li className="flex flex-col items-center w-full max-w-56 room_li cursor-pointer gap-5">
                    <img src="/room.svg" width={24} height={24} alt="room icon" />
                    <h3>Living room</h3>
                </li>
                <li className="flex flex-col items-center w-full max-w-56 room_li cursor-pointer gap-5">
                    <img src="/room.svg" width={24} height={24} alt="room icon" />
                    <h3>Living room</h3>
                </li>
                <li className="flex flex-col items-center w-full max-w-56 room_li cursor-pointer gap-5">
                    <img src="/room.svg" width={24} height={24} alt="room icon" />
                    <h3>Living room</h3>
                </li>
                <li className="flex flex-col items-center w-full max-w-56 room_li cursor-pointer gap-5">
                    <img src="/room.svg" width={24} height={24} alt="room icon" />
                    <h3>Living room</h3>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;
