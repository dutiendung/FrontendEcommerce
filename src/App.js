import Header from "./layouts/Header";
import "./assets/sass/app.scss";
import Footer from "./layouts/Footer/Footer";
import Nav from "./layouts/Nav";
import Main from "./layouts/Main/Main";
function App() {
  return (
    <div>
      <Header />
      <Nav></Nav>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
