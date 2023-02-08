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
import { useState } from "react";

import Login from"./pages/Login"
import Post from "./pages/Post";
import Navbar from "./components/Navbar";
import {Navigate } from "react-router-dom";

function App() {

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

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
      case "/workout-plans":
        title = "";
        metaDescription = "";
        break;
      case "/personal-trainers":
        title = "";
        metaDescription = "";
        break;
      case "/gym-membership":
        title = "";
        metaDescription = "";
        break;
      case "/gym-3-krakow":
        title = "";
        metaDescription = "";
        break;
      case "/gym-2-katowice":
        title = "";
        metaDescription = "";
        break;
      case "/gym-1-krakow":
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
    <div>
    <Navbar user={user} />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />

      <Route path="/about-us" element={<ABOUTUS />} />

      <Route path="/top-10" element={<TOP10 />} />

      <Route path="/workout-plans" element={<WORKOUTPLANS />} />

      <Route path="/personal-trainers" element={<PERSONALTRAINERS />} />

      <Route path="/gym-membership" element={<GYMMEMBERSHIP />} />

      <Route path="/gym-3-krakow" element={<GYM3KRAKOW />} />

      <Route path="/gym-2-katowice" element={<GYM2KATOWICE />} />

      <Route path="/gym-1-krakow" element={<GYM1KRAKOW />} />
    </Routes>
    </div>
  );
}
export default App;
