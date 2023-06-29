import Header from "./layouts/Header";
import "./assets/sass/app.scss";
import Footer from "./layouts/Footer";
import Nav from "./layouts/Nav";
import Main from "./layouts/Main";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
