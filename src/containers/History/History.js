import React, { useEffect } from "react";
import "./History.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHistoryAsync } from "../../store/slice/HistorySlice";
import { useTranslation } from "react-i18next";
import { formattedDate } from "../../utils/common";

const History = () => {
  const { t } = useTranslation();
  const historyData = useSelector(state => state?.history);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigation = item => {
    const title = item?.title?.replace(/\s+/g, "-");
    navigate(`/history/${title}`, { state: { item } });
  };

  useEffect(() => {
    dispatch(getHistoryAsync("/history"));
  }, [dispatch]);

  return (
    <div className="history-container">
      {historyData?.historyData.map(item => {
        const date = formattedDate(item.event_date_utc.split("T")[0]);

        return (
          <div key={item.id} className="card-container">
            <div
              className="left-card"
              onClick={() => navigation(item)}
              key={item.id}
            >
              <h3>{`Title : ${item.title}`}</h3>
              <h3>
                {t("date")} {date}
              </h3>
            </div>
            <div className="right-card">
              <div className="hover-button">
                <a href={item?.links?.article} rel="noreferrer" target="_blank">
                  {t("readMore")}
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
