import React from "react";
import { baseUrl } from '@/config/appConfig';

const Categorys = () => {
    return (
        <div className="container">
          <h2 className="text-primary font-semibold text-3xl uppercase pb-10">
            Shop By Category
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2  shadow-xl lg:grid-cols-3">
            {/* Col 1 */}
            <div className="col relative overflow-hidden rounded-sm group">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="w-full group-hover:scale-105 transition duration-500"
              />
              <a
                href="#"
                className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
              >
                Shos
              </a>
            </div>
            {/* Col 2 */}
            <div className="col relative overflow-hidden rounded-sm group">
              <img
                src="https://m.media-amazon.com/images/I/81udLtALW+L._AC_UY1000_.jpg"
                alt=""
                className="w-full group-hover:scale-105 transition duration-500"
              />
              <a
                href="#"
                className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
              >
                golds Watch
              </a>
            </div>
            {/* Col 3 */}
            <div className="col relative overflow-hidden rounded-sm group">
              <img
                src="https://i.ytimg.com/vi/JVCvTiMTUdc/sddefault.jpg"
                alt=""
                className="w-full group-hover:scale-105 transition duration-500"
              />
              <a
                href="#"
                className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
              >
                Grils Watch
              </a>
            </div>
            {/* sCol 4 */}
            <div className="col relative overflow-hidden rounded-sm group">
              <img
                src="https://db40h8yme363v.cloudfront.net/assets/images/misc/luxury-watch-6c24a59ca8.jpg"
                alt=""
                className="w-full group-hover:scale-105 transition duration-500"
              />
              <a
                href="#"
                className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
              >
               Lgins Watch 
              </a>
            </div>
            {/* Col 5 */}
            <div className="col relative overflow-hidden rounded-sm group">
              <img
                src="https://img.freepik.com/free-photo/colorful-sneaker-is-being-spray-painted-with-purple-spray-paint_123827-23438.jpg?size=626&ext=jpg&ga=GA1.1.1439354420.1695187003&semt=sph"
                alt=""
                className="w-full group-hover:scale-105 transition duration-500"
              />
              <a
                href="#"
                className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
              >
                Shos new 
              </a>
            </div>

            {/* Col 6 */}
            <div className="col relative overflow-hidden rounded-sm group">
              <img
                src="https://img.freepik.com/free-photo/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai_188544-19682.jpg?size=626&ext=jpg&ga=GA1.1.1439354420.1695187003&semt=sph"
                alt=""
                className="w-full group-hover:scale-105 transition duration-500"
              />
              <a
                href="#"
                className="absolute inset-0 flex justify-center items-center text-white font-medium text-xl bg-black/30 hover:bg-black/50 transition"
              >
                Shos
              </a>
            </div>
          </div>
        </div>
    );
}

export default Categorys;