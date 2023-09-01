import img1 from "../../assets/images/img2.jpg";
import img2 from "../../assets/images/img1.jpg";
import img3 from "../../assets/images/img3.webp";
import img4 from "../../assets/images/img4.webp";
import img5 from "../../assets/images/img5.jpeg";
import Collection from "./Collection";
import Category from "../Category/Category";
import BestSellCollection from "./BestSellCollection";
import useTitle from "../../Hooks/useTitle";
import Contact from "../Contact/Contact";
import ShowCase from "../ShowCase/ShowCase";
import NewArrival from "../NewArrival/NewArrival";
const Home = () => {
  useTitle("Home")
  return (
    <div className="my-20">
      <div className=" lg:flex items-center justify-between gap-10 ">
        <div className=" px-12 font-semibold text-left">
          <h1 className=" text-7xl">
            Collect Super rare <span className=" text-amber-500">digital</span>{" "}
            Assets Today!
          </h1>
          <div className=" lg:flex items-center py-6 lg:gap-10">
            <button className="bg-amber-500 hover:bg-blue-500 text-white font-semibold py-3 px-5 rounded-full">
              Explore
            </button>
            <button className="bg-blue-500 hover:bg-amber-500 text-white font-semibold py-3 px-4 rounded-2xl">
              Connect Wallet
            </button>
          </div>
        </div>
        <div className="carousel carousel-center lg:w-[1000px]  lg:h-[75vh] p-4 space-x-4 bg-neutral-300 rounded-box  my-10">
          <div className="carousel-item">
            <img src={img1} className="rounded-box w-[400px]  " />
          </div>
          <div className="carousel-item ">
            <img src={img2} className="rounded-box w-[400px]" />
          </div>
          <div className="carousel-item ">
            <img src={img3} className="rounded-box w-[400px]" />
          </div>
          <div className="carousel-item ">
            <img src={img2} className="rounded-box w-[400px]" />
          </div>
          <div className="carousel-item ">
            <img src={img5} className="rounded-box w-[400px]" />
          </div>
          <div className="carousel-item ">
            <img src={img4} className="rounded-box w-[400px]" />
          </div>
        </div>
      </div>

      <Collection></Collection>
      <ShowCase></ShowCase>
      {/* <NewArrival></NewArrival> */}
      <Category></Category>
      <BestSellCollection></BestSellCollection>
      <Contact></Contact>
    </div>
  );
};

export default Home;
