import img1 from "../../assets/images/pic3.jpeg";
import img2 from "../../assets/images/img3.webp";
import img3 from "../../assets/images/img4.webp";
import img4 from "../../assets/review.jpg";
import { BsStarFill } from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BestSellCollection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="my-16">
      <div className=" my-7 text-left">
        <h1 className=" text-amber-500 text-4xl font-semibold">BEST SELLERS</h1>
        <p>Do not miss the current offer</p>
      </div>
      <div className=" grid lg:grid-cols-3 gap-5">
        <div
          className=" text-left p-4 border-4 rounded-lg "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img className=" h-80 w-80 rounded-lg" src={img1} alt="" />
          <h1 className=" text-3xl font-semibold my-3">
            All Super fast style <br /> Regular Cars
          </h1>
          <h2 className=" text-amber-400 font-semibold">IN STOCK</h2>
          <div className=" flex gap-1 my-2">
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
          </div>
          <div className=" text-xl font-semibold">
            <del>$45.0</del> $30.0
          </div>
        </div>
        <div
          className=" text-left p-4 border-4 rounded-lg"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <img className=" h-80 w-80 rounded-lg" src={img2} alt="" />
          <h1 className=" text-3xl font-semibold my-3">
            All Super fast style <br /> Regular Cars
          </h1>
          <h2 className=" text-amber-400 font-semibold">IN STOCK</h2>
          <div className=" flex gap-1 my-2">
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
          </div>
          <div className=" text-xl font-semibold">
            <del>$45.0</del> $30.0
          </div>
        </div>
        <div
          className=" text-left p-4 border-4 rounded-lg"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <img className=" h-80 w-80 rounded-lg" src={img3} alt="" />
          <h1 className=" text-3xl font-semibold my-3">
            All Super fast style <br /> Regular Cars
          </h1>
          <h2 className=" text-amber-400 font-semibold">IN STOCK</h2>
          <div className=" flex gap-1 my-2">
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
            <p className=" text-amber-400">
              <BsStarFill />
            </p>
          </div>
          <div className=" text-xl font-semibold">
            <del>$45.0</del> $30.0
          </div>
        </div>
      </div>

      {/* review */}
      <div className=" lg:flex my-20 items-center">
        <div className=" w-1/2" data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
            <h1 className=" text-5xl font-semibold ">CUSTOMER <span className=" text-amber-400">REVIEW</span></h1>
            <p className="text-xl font-semibold my-6 text-left">I have been using this service for a while now, and I couldnt be happier. The results have been outstanding, and it has greatly improved my productivity. The team behind it is knowledgeable and responsive. I cant imagine my workflow without it.</p>
            <button className=" btn btn-warning">
                Read More
            </button>
        </div>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <img className=" rounded-lg" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BestSellCollection;
