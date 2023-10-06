import { useState, useEffect } from "react";
import { Comments } from "../Comments/Comments";
import { FaThumbtack } from "react-icons/fa";
import { HiOutlineChatAlt2, HiFilm } from "react-icons/hi";
import { MyCustomVideo } from "./MyCustomVideo";

export const Tab = ({
  product,
  shouldScrollToComments,
  setShouldScrollToComments,
}) => {
  const { id, videoUrl, description } = product;
  const [activeTab, setActiveTab] = useState("des");
  const [show, setShow] = useState(false);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toogleShow = () => {
    setShow(!show);
  };

  const desLimit = (props) => {
    if (typeof props === "string") {
      return props.slice(0, 200);
    }
    return props;
  };

  const createMarkup = (html) => ({ __html: html });

  useEffect(() => {
    if (shouldScrollToComments) {
      // Найдите элемент вкладки "Комментарии" по его id и выполните прокрутку
      const commentsTab = document.getElementById("commentsTab");
      if (commentsTab) {
        commentsTab.scrollIntoView({ behavior: "smooth" });
      }
      // Установите состояние shouldScrollToComments обратно в false
      setShouldScrollToComments(false);
      handleTabClick("comments");
    }
  }, [shouldScrollToComments, setShouldScrollToComments]);

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
          className={`tab_video ${
            activeTab === "video" ? "btn_tab_active" : ""
          }`}
          onClick={() => handleTabClick("video")}
        >
          <h3>{<HiFilm />} Відео тканини</h3>
        </button>
        <button
          id="commentsTab"
          className={activeTab === "comments" ? "btn_tab_active" : ""}
          onClick={() => handleTabClick("comments")}
        >
          <h3>{<HiOutlineChatAlt2 />} Комментарі</h3>
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "des" && (
          <div className="tab-content_p">
            <div
              dangerouslySetInnerHTML={
                show
                  ? createMarkup(description)
                  : createMarkup(desLimit(description))
              }
            />
            {description && (
              <button onClick={toogleShow} className="tab_describe_show">
                {show ? "Сховати опис" : "Показати опис"}
              </button>
            )}
          </div>
        )}
        {activeTab === "video" && (
          <MyCustomVideo url={videoUrl} className="content_video" />
        )}
        <div>{activeTab === "comments" && <Comments id={id} />}</div>
      </div>
    </>
  );
};
