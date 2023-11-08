import { baseUrl } from "@/config/appConfig";

const TopSlider = () => {
  return (
    <div
      className="lg:w-full mt-6 bg-no-repeat bg-center bg-cover py-40  md:block  rounded-lg shadow-2xl"
      style={{ backgroundImage: `url(${baseUrl}/img/banner/banner-4.jpg)` }}
    >
      <div className="container">
      <div className="row">
          <div className="col space-y-10">
            <h1 className="text-primary font-bold text-5xl max-w-md">
              Best Collection for Home Decoration
            </h1>
            <p className="max-w-md text-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              enim minus modi praesentium fuga.
            </p>
            <div>
              <a
                href="#"
                className="text-white rounded-md px-6 py-2 font-medium bg-gradient-to-r from-accentOne to-accentTwo"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
