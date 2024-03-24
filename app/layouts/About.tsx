const About = () => {
  return (
    <>
      <div className="about">
        <div className="container flex flex-wrap justify-center gap-5 items-center">
          <img src="/about.png" alt="img" width={596} height={577} />
          <div className="contents_about w-96 flex flex-col gap-5">
            <h3 className="text-4xl text-green-900">About Us</h3>
            <p>
              All of our furniture uses the best materials and choices for our
              customers.All of our furniture uses the best materials
            </p>
            <ul className="flex flex-col flex-wrap gap-5">
              <li className="flex flex-wrap gap-5 justify-center">
                <img src="/shield.svg" alt="img" width={50} height={50} />
                <div>
                  <h4 className="text-3xl text-green-900">Best Quality</h4>
                  <p className="w-full max-w-72">
                    All of our furniture uses the best materials and choices
                  </p>
                </div>
              </li>
              <li className="flex flex-wrap gap-5 justify-center">
                <img src="/tick.svg" alt="" width={50} height={50} />
                <div>
                  <h4 className="text-3xl text-green-900">100% Secure</h4>
                  <p className="w-full max-w-72">
                    All of our furniture uses the best materials and choices
                  </p>
                </div>
              </li>
              <li className="flex flex-wrap gap-5 justify-center">
                <img src="/shipping.svg" alt="img" width={50} height={50} />
                <div>
                  <h4 className="text-3xl text-green-900">Free Shpping</h4>
                  <p className="w-full max-w-72">
                    All of our furniture uses the best materials and choices
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
