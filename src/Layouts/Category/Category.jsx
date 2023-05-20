/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleToy from "./SingleToy";

const Category = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [toyData, setToyData] = useState([]);
//   console.log(toyData);
  // const {price}= toyData
  useEffect(() => {
    fetchToyData();
  }, []);

  const fetchToyData = async () => {
    try {
      const response = await fetch(`https://toy-marketplace-server-side-three.vercel.app/allToy`); 
      const data = await response.json();
      setToyData(data);
    } catch (error) {
      console.error("Error fetching toy data:", error);
    }
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

const result = toyData?.filter((toy)=>toy.subCategory == (activeTab == 0 ? 'Mini Truck' : (activeTab == 1 ? 'Sport Car': 'Regular Car')));

// setToyData(result);
// console.log(result);
  return (
    <div className="container mx-auto p-4">
      <TabList className="flex mb-4">
        <Tab
          className={`px-4 py-2 rounded-lg ${
            activeTab === 0
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleTabChange(0)}
        >
          Mini Truck
        </Tab>
        <Tab
          className={`px-4 py-2 rounded-lg ${
            activeTab === 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleTabChange(1)}
        >
          Sport Car
        </Tab>
        <Tab
          className={`px-4 py-2 rounded-lg ${
            activeTab === 2
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleTabChange(2)}
        >
          Regular Car
        </Tab>
      </TabList>
     <div className=" grid lg:grid-cols-3 gap-7">
        {
            result.map((toy)=> <SingleToy
            key= {toy._id}
            toy= {toy}
            ></SingleToy>)
        }
     </div>
    </div>
  );
};

export default Category;
