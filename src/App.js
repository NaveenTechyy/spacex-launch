import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./locales/index";
import { useTranslation } from "react-i18next";

import NavList from "./components/navList/NavList";

const Home = React.lazy(() => import("./containers/Home/Home"));
const History = React.lazy(() => import("./containers/History/History"));
const HistoryItem = React.lazy(() =>
  import("./containers/History/historyItem/HistoryItem")
);
const Launches = React.lazy(() => import("./containers/Launches/Launches"));
const LaunchItem = React.lazy(() =>
  import("./containers/Launches/launchItem/LaunchItem")
);
const Rockets = React.lazy(() => import("./containers/Rockets/Rockets"));
const RocketItem = React.lazy(() =>
  import("./containers/Rockets/rocketItem/RocketItem")
);
const PageNotFound = React.lazy(() =>
  import("./containers/PageNotFound/PageNotFound")
);

const App = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<div>{t("loading")}</div>}>
      <Provider store={store}>
        <Router>
          <NavList />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/history/:title" element={<HistoryItem />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/launches/:name" element={<LaunchItem />} />
            <Route path="/rockets" element={<Rockets />} />
            <Route path="/rockets/:id" element={<RocketItem />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Provider>
    </Suspense>
  );
};

export default App;
