import pic1 from "../../assets/images/pic2.jpeg"
import pic2 from "../../assets/images/pic3.jpeg"
import pic3 from "../../assets/images/pic4.jpeg"
import pic4 from "../../assets/images/pic1.jpg"
import pic5 from "../../assets/images/img4.webp"
import pic6 from "../../assets/images/pic6.webp"
import img1 from "../../assets/images/img2.jpg"
import img2 from "../../assets/images/img1.jpg"
const Collection = () => {
    return (
        
        <div className="my-20">
            <h1 className=" text-center text-amber-400 my-8 font-bold text-4xl"> Our Collections</h1>
            <div className=" relative  grid lg:grid-cols-4 sm:grid-cols-1 gap-7 justify-between"> 
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic1} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic2} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic3} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic4} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic5} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic6} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={img1} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={img2} alt="" />
        </div>
        </div>
    );
};

export default Collection;