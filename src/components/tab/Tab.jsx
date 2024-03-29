import { useState, useEffect } from "react";
import { getProductById , refreshToken } from '../../api'
import { useParams } from 'react-router-dom'
import { Comments } from "../Comments/Comments";
import { FaThumbtack } from 'react-icons/fa'
import { HiOutlineChatAlt2, HiFilm } from 'react-icons/hi'
import { MyCustomVideo } from "./MyCustomVideo";
import { SliderForProductOne } from "../Slider/SliderForProductOne";



export const Tab = ({product}) => {
  const {id,videoUrl, description} = product;
  const [activeTab, setActiveTab] = useState('des');
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };


  return (
    <>
      <div className="tab-buttons">
        <button
          className={activeTab === "des" ? "btn_tab_active" : ""}
          onClick={() => handleTabClick("des")}
        >
          <h3>{<FaThumbtack />} Опис тканини</h3>
        </button>
        <button
          className={`tab_video ${activeTab === "video" ? "btn_tab_active" : ""}`}
          onClick={() => handleTabClick("video")}
        >
          <h3>{<HiFilm />} Відео тканини</h3>
        </button>
        <button
          className={activeTab === "comments" ? "btn_tab_active" : ""}
          onClick={() => handleTabClick("comments")}
        >
          <h3>{<HiOutlineChatAlt2 />}  Комментарі</h3>
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "des" &&
          <div className="tab-content_p">
           <p>{description}</p> 
          <SliderForProductOne/>
          </div>
          }
        {activeTab === "video" &&
          
            <MyCustomVideo
              url={videoUrl}
              className='content_video'
            />
        }
        {activeTab === "comments" && <Comments id = {id} />}
      </div>
    </>
  );
}
