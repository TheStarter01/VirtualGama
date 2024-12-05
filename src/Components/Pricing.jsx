import { CheckCircleIcon } from "lucide-react";
import { pricingOptions } from "../constants";
const Pricing = () => {
  return (
    <div className="mt-20 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((opt, i) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={i}>
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8 ">
                {opt.title}
                {opt.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text text-xl ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{opt.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {opt.features.map((feautres, i) => (
                  <li key={i} className="mt-8 flex items-center">
                    <CheckCircleIcon />
                    <span className="ml-2">{feautres}</span>
                  </li>
                ))}
              </ul>
              <a className="inline-flex justify-center items-center text-center w-full h-12 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
