import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsStarFill } from "react-icons/bs";

import img1 from "../../assets/images/pic3.jpeg";
import img2 from "../../assets/images/img3.webp";
import img3 from "../../assets/images/img4.webp";
import img4 from "../../assets/review.jpg";

const BestSellCollection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      multiple:true,
      offset: 200, 
      delay: 200, 
    });
  }, []);

  return (
    <div className="my-16">
      <div className="my-7 text-left">
        <h1 className="text-amber-500 text-4xl font-semibold">BEST SELLERS</h1>
        <p>Do not miss the current offer</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        <div
          className="text-left p-4 border-4 rounded-lg"
          data-aos="fade-right"
        >
          <img className="h-80 w-80 rounded-lg" src={img1} alt="" />
          <h1 className="text-3xl font-semibold my-3">
            All Super fast style <br /> Regular Cars
          </h1>
          <h2 className="text-amber-400 font-semibold">IN STOCK</h2>
          <div className="flex gap-1 my-2">
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
          </div>
          <div className="text-xl font-semibold">
            <del>$45.0</del> $30.0
          </div>
        </div>
        <div className="text-left p-4 border-4 rounded-lg" data-aos="fade-down">
          <img className="h-80 w-80 rounded-lg" src={img2} alt="" />
          <h1 className="text-3xl font-semibold my-3">
            All Super fast style <br /> Regular Cars
          </h1>
          <h2 className="text-amber-400 font-semibold">IN STOCK</h2>
          <div className="flex gap-1 my-2">
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
          </div>
          <div className="text-xl font-semibold">
            <del>$45.0</del> $30.0
          </div>
        </div>
        <div className="text-left p-4 border-4 rounded-lg" data-aos="fade-left">
          <img className="h-80 w-80 rounded-lg" src={img3} alt="" />
          <h1 className="text-3xl font-semibold my-3">
            All Super fast style <br /> Regular Cars
          </h1>
          <h2 className="text-amber-400 font-semibold">IN STOCK</h2>
          <div className="flex gap-1 my-2">
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
            <p className="text-amber-400">
              <BsStarFill />
            </p>
          </div>
          <div className="text-xl font-semibold">
            <del>$45.0</del> $30.0
          </div>
        </div>
      </div>

      {/* review */}
      <div className="lg:flex my-20 items-center">
        <div className="w-1/2" data-aos="fade-right">
          <h1 className="text-5xl font-semibold">
            CUSTOMER <span className="text-amber-400">REVIEW</span>
          </h1>
          <p className="text-xl font-semibold my-6 text-left">
            I have been using this service for a while now, and I couldn't be
            happier. The results have been outstanding, and it has greatly
            improved my productivity. The team behind it is knowledgeable and
            responsive. I can't imagine my workflow without it.
          </p>
          <button className="btn btn-warning">Read More</button>
        </div>
        <div data-aos="fade-up">
          <img className="rounded-lg" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BestSellCollection;
