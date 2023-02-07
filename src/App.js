import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ABOUTUS from "./pages/ABOUTUS";
import TOP10 from "./pages/TOP10";
import WORKOUTPLANS from "./pages/WORKOUTPLANS";
import PERSONALTRAINERS from "./pages/PERSONALTRAINERS";
import GYMMEMBERSHIP from "./pages/GYMMEMBERSHIP";
import GYM3KRAKOW from "./pages/GYM3KRAKOW";
import GYM2KATOWICE from "./pages/GYM2KATOWICE";
import GYM1KRAKOW from "./pages/GYM1KRAKOW";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/top-10":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/personal-trainers":
        title = "";
        metaDescription = "";
        break;
      case "/frame-4":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/about-us" element={<ABOUTUS />} />

      <Route path="/top-10" element={<TOP10 />} />

      <Route path="/frame-6" element={<WORKOUTPLANS />} />

      <Route path="/personal-trainers" element={<PERSONALTRAINERS />} />

      <Route path="/frame-4" element={<GYMMEMBERSHIP />} />

      <Route path="/frame-3" element={<GYM3KRAKOW />} />

      <Route path="/frame-2" element={<GYM2KATOWICE />} />

      <Route path="/frame-1" element={<GYM1KRAKOW />} />
    </Routes>
  );
}
export default App;
