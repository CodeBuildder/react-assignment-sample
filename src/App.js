import HeaderPage from "./components/Header/headerPage.jsx";
import "./App.css";
import "./styles/styles.scss";
import BodyPage from "./components/Body/bodyPage.jsx";
import FooterPage from "./components/Footer/footerPage.jsx";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <BodyPage />
      <FooterPage />
    </div>
  );
}

export default App;
