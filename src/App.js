// import DvgBrojke from "./components/Brojke/DvgBrojke";
import Header from "./components/Header/Header";
import FrontPageIntro from "./components/FrontPageIntro";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <FrontPageIntro />
      {/* <DvgBrojke /> */}
    </div>
  );
};

export default App;
