const Popular = () => {
  return (
    <>
      <div className="popular margin">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-5">
            <div>
              <h2 className="text-4xl">Our Popular Furniture</h2>
              <p className="popular_desc text-xl mt-5">
                All of our furniture uses the best materials and choices for our
                customers.All of our furniture uses the best materials and
                choices for our customers.
              </p>
            </div>
            <div className="flex gap-10">
              <button className="bg-slate-400 w-full max-w-16 p-5">{`<`}</button>
              <button className="bg-slate-400 w-full max-w-16 p-5">{`>`}</button>
            </div>
          </div>
          <ul className="flex flex-wrap justify-center gap-10 mt-14">
            <li className="w-full max-w-96">
              <img src="/chair.svg" alt="chair" width={380} height={246} />
              <div className="flex flex-col gap-10 mt-5">
                <div className="flex flex-wrap justify-between">
                  <h3>White Swan Chair </h3>{" "}
                  <div className="flex flex-wrap gap-5">
                    <button>like</button>
                    <button>share</button>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between">
                  <h3>30$</h3>
                  <button className="btn2">buy now</button>
                </div>
              </div>
            </li>
            <li className="w-full max-w-96">
              <img src="/chair.svg" alt="chair" width={380} height={246} />
              <div className="flex flex-col gap-10 mt-5">
                <div className="flex flex-wrap justify-between">
                  <h3>White Swan Chair </h3>{" "}
                  <div className="flex flex-wrap gap-5">
                    <button>like</button>
                    <button>share</button>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between">
                  <h3>30$</h3>
                  <button className="btn2">buy now</button>
                </div>
              </div>
            </li>
            <li className="w-full max-w-96">
              <img src="/chair.svg" alt="chair" width={380} height={246} />
              <div className="flex flex-col gap-10 mt-5">
                <div className="flex flex-wrap justify-between">
                  <h3>White Swan Chair </h3>{" "}
                  <div className="flex flex-wrap gap-5">
                    <button>like</button>
                    <button>share</button>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between">
                  <h3>30$</h3>
                  <button className="btn2">buy now</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Popular;
