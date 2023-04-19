import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/carousel/Carousel";
import {
  getLaunchAsync,
  getPastLaunchAsync,
  getUpcomingLaunchAsync,
} from "../../store/slice/LaunchSlice";
import PropTypes from "prop-types";
import "./Launches.css";

const Launches = () => {
  const launchData = useSelector(state => state?.launch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLaunchAsync("/launches"));
    dispatch(getPastLaunchAsync("/launches/past"));
    dispatch(getUpcomingLaunchAsync("/launches/upcoming"));
  }, [dispatch]);

  const allData = launchData?.LaunchSlice?.launchData.filter(
    item => item?.links?.patch?.small
  );
  console.log("allData", allData);
  const upcomingData = launchData?.upcomingLaunchSlice?.upcomingLaunchData;

  return (
    <div className="launches-page">
      <Carousel dataList={allData} />
      <section>
        <div className="cards-wrapper">
          {upcomingData &&
            upcomingData.map((item, i) => {
              return (
                <div key={i} className="card-grid-space">
                  <div className="card-sect">
                    <div>
                      <h1>{item?.name}</h1>
                      <h3>{item?.date_local}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

Launches.propTypes = {
  allData: PropTypes.array,
};
export default Launches;
