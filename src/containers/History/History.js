import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryAsync } from "../../store/slice/HistorySlice";
import "./History.css";
import { useNavigate } from "react-router-dom";

const History = () => {
  const historyData = useSelector(state => state?.history);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("historyData", historyData);

  const navigation = item => {
    console.log("item", item);
    navigate(`/history/${item.title}`, { state: { item } });
  };
  useEffect(() => {
    dispatch(getHistoryAsync("/history"));
  }, []);

  return (
    <div className="history-container">
      {historyData?.historyData.map(item => {
        const date = item.event_date_utc.split("T")[0];
        const time = item.event_date_utc.split("T")[1];
        return (
          <div key={item.id} className="card-container">
            <div
              className="left-card"
              onClick={() => navigation(item)}
              key={item.id}
            >
              <h3>{`Title : ${item.title}`}</h3>
              <h3>Date : {date}</h3>
              <h3>Time : {time}</h3>
            </div>
            <div className="right-card">
              <div className="hover-button">
                <a href={item?.links?.article} rel="noreferrer" target="_blank">
                  Article
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
