
import img1 from "../../assets/images/img2.jpg"
import img2 from "../../assets/images/img1.jpg"
import img3 from "../../assets/images/img3.webp"
import img4 from "../../assets/images/img4.webp"
import img5 from "../../assets/images/img5.jpeg"
import Collection from "./Collection"
const Home = () => {
  return (
    <div>
      <div className="carousel carousel-center  lg:h-[100vh] p-4 space-x-4 bg-neutral-300 rounded-box mx-auto my-10">
        <div className="carousel-item">
          <img
            src={img1}
            className="rounded-box w-[700px]  "
          />
        </div>
        <div className="carousel-item ">
          <img
            src={img2}
            className="rounded-box w-[700px]"
          />
        </div>
        <div className="carousel-item ">
          <img
            src={img3}
            className="rounded-box w-[700px]"
          />
        </div>
        <div className="carousel-item ">
          <img
            src={img2}
            className="rounded-box w-[700px]"
          />
        </div>
        <div className="carousel-item ">
          <img
            src={img5}
            className="rounded-box w-[700px]"
          />
        </div>
        <div className="carousel-item ">
          <img
            src={img4}
            className="rounded-box w-[700px]"
          />
        </div>
        

        
      </div>

      <Collection></Collection>
    </div>
  );
};

export default Home;
