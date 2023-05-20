import React, { useEffect, useState } from 'react';
import Cat from './Cat';

const Category = () => {

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Marvel");

    useEffect(() => {
        fetch(`https://comic-verse-server.vercel.app/gettoy/${activeTab}`)
          .then(res => res.json())
          .then((result) => {
              setToys(result);
          });
    }, [activeTab]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

    return (
        <div>
      <div className="tab-container text-center">
        <div className="text-center w-100 mx-auto">
          <hr />
            <h2 className='text-4xl py-4'>Category</h2>
          <div className="bg-orange-800 py-2">
            <div
              onClick={() => handleTabClick("Marvel")}
              className={`tab  tab2 Marvel text-xl  text-white ${
                activeTab == "Marvel" ? "text-white btn btn-error" : ""
              }`}
            >
              Marvel
            </div>
            <div
              onClick={() => handleTabClick("DC")}
              className={`tab  tab2 DC  text-xl text-white${
                activeTab == "DC" ? " bg-danger text-white btn btn-error" : ""
              }`}
            >
              DC
            </div>
            <div
              onClick={() => handleTabClick("Disney")}
              className={`tab  tab3 Disney text-xl text-white ${
                activeTab == "Disney" ? " bg-danger text-white btn btn-error" : ""
              }`}
            >
              Disney
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        {toys?.map((toy) => (
          <Cat toy={toy}></Cat>
        ))}
      </div>
    </div>
    );
};

export default Category;