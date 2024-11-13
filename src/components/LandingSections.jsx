import React from "react";
import Match from "../assets/illustration2.png";
import Free from "../assets/ilustration1.png";
import Time from "../assets/illustration3.png";

const LandingSections = () => {
  const BannerSvg = [
    {
      id: 1,
      url: Match,
      title: "Perfecting Matching",
      subTitle:
        "Mate-Space’s unique compatibility quiz walks you through lifestyle and personality questions, ensuring you're matched with a roommate who’s the perfect fit.",
    },
    {
      id: 2,
      url: Free,
      title: "100% Free",
      subTitle: "Enjoy a full-featured experience with no hidden fees or upgrade nags—Mate-Space is entirely free for all users!",
    },
    {
      id: 3,
      url: Time,
      title: "Save Time",
      subTitle: "Connect with potential roommates that are relevant and have a mutual intent. Refine and filter out any that are not a good fit.",
    },
  ];
  return (
    <div className="w-full bg-white py-28">
      <div className="w-full py-10">
        <div class="relative">
          <h1 className="text-center text-4xl mb-3 font-semibold">
            Why You Should Work With Us!!
          </h1>
          <div class=" w-full flex justify-center items-center">
            <div class="w-full md:w-[90%] mx-auto">
              <div class="w-12/12 mx-auto rounded-2xl bg-white py-12 bg-opacity-40 backdrop-filter backdrop-blur-lg">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center mx-auto">
                  {BannerSvg.map((data, id) => (
                    <div class="bg-white  p-6 mb-6" key={data.id || id}>
                      <div class="relative mb-8 rounded-2xl">
                        <div className="flex justify-center items-center">
                          <img src={data.url} alt={data.title} className="object-cover w-52 h-52" />
                        </div>
                      </div>
                      <div class=" w-full pb-4 mb-auto">
                        <p className="text-center text-black hover:text-orange-600 font-semibold text-[22px] w-[80%] mx-auto">
                          {data.title}
                        </p>
                      </div>
                      <h3 class="font-normal text-gray-700 text-[17px] leading-8 w-[70%] mx-auto">
                        <span class="block relative group-hover:text-red-700 transition-colors duration-200 ">
                          {data.subTitle}
                        </span>
                      </h3>
                      <div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSections;
