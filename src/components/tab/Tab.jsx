import { useState, useEffect } from "react";
import { getProductById } from '../../api'
import { useParams } from 'react-router-dom'
import { Comments } from "../Comments/Comments";
import { FaThumbtack } from 'react-icons/fa'
import { HiOutlineChatAlt2, HiFilm } from 'react-icons/hi'
import { MyCustomVideo } from "./MyCustomVideo";


export const Tab = (props) => {
  const [activeTab, setActiveTab] = useState('des');
  const [product, setProduct] = useState({})
  const {id}  = useParams()

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    getProductById(id).then((data) => setProduct(data))
  }, [id])


  return (
    <>
      <div className="tab-buttons">
        <button
          className={activeTab === "des" ? "btn_tab_active" : ""}
          onClick={() => handleTabClick("des")}
        >
          <h5>{<FaThumbtack />} Опис тканини</h5>
        </button>
        <button
          className={`tab_video ${activeTab === "video" ? "btn_tab_active" : ""}`}
          onClick={() => handleTabClick("video")}
        >
          <h5>{<HiFilm />} Відео тканини</h5>
        </button>
        <button
          className={activeTab === "comments" ? "btn_tab_active" : ""}
          onClick={() => handleTabClick("comments")}
        >
          <h5>{<HiOutlineChatAlt2 />}  Комментарі</h5>
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "des" &&
          <p className="tab-content_p">{product.description}</p>}
        {activeTab === "video" &&
          
            <MyCustomVideo
              url={product.videoUrl}
              className='content_video'
            />
        }
        {activeTab === "comments" && <Comments id = {id} />}
      </div>
    </>
  );
}
