import FrontpageIntro from "./components/Frontpage Intro/FrontpageIntro";
import Header from "./components/Header/Header";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <FrontpageIntro />
    </div>
  );
};

export default App;
