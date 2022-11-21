import "./styles.css";
import Header from "./component/common/Header";
import About from "./component/pages/about/About";
import Features from "./component/pages/features/Features";
import Pricing from "./component/pages/plans/Pricing";
import Sponsored from "./component/pages/sponsor/Sponsored";
import Testimonial from "./component/pages/testimonial/Testimonial";
import Subscribe from "./component/pages/subscribe/Subscribe";
import Help from "./component/pages/help/Help";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <About />
        <Features />
        <Pricing />
        <Sponsored />
        <Testimonial />
        <Subscribe />
        <Help />
      </Router>
    </div>
  );
}
