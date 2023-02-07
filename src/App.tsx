import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookPro161 from "./pages/MacBookPro161";
import FrameComponent1 from "./pages/FrameComponent1";
import FrameComponent2 from "./pages/FrameComponent2";
import FrameComponent3 from "./pages/FrameComponent3";
import FrameComponent4 from "./pages/FrameComponent4";
import FrameComponent5 from "./pages/FrameComponent5";
import FrameComponent6 from "./pages/FrameComponent6";
import FrameComponent7 from "./pages/FrameComponent7";
import FrameComponent8 from "./pages/FrameComponent8";
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
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-7":
        title = "";
        metaDescription = "";
        break;
      case "/frame-8":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/frame-5":
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
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookPro161 />} />

      <Route path="/frame-2" element={<FrameComponent1 />} />

      <Route path="/frame-7" element={<FrameComponent2 />} />

      <Route path="/frame-8" element={<FrameComponent3 />} />

      <Route path="/frame-6" element={<FrameComponent4 />} />

      <Route path="/frame-5" element={<FrameComponent5 />} />

      <Route path="/frame-4" element={<FrameComponent6 />} />

      <Route path="/frame-3" element={<FrameComponent7 />} />

      <Route path="/frame-1" element={<FrameComponent8 />} />
    </Routes>
  );
}
export default App;
