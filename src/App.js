import DvgBrojke from "./components/Brojke/DvgBrojke";
import Footer from "./components/Footer/Footer";
import FrontpageIntro from "./components/Frontpage Intro/FrontpageIntro";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <FrontpageIntro />
      <DvgBrojke />

      <Products />
      <Footer />
    </div>
  );
};

export default App;
