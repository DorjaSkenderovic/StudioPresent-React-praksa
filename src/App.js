import DvgBrojke from "./components/Brojke/DvgBrojke";
import Footer from "./components/Footer/Footer";
import FrontpageIntro from "./components/Frontpage Intro/FrontpageIntro";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import "./styles/App.scss";

const App = () => {
  return (
    <>
      <Header />
      <FrontpageIntro />
      <DvgBrojke />

      <Products />
      <Footer />
    </>
  );
};

export default App;
