import { ToastContainer } from "react-toastify";
import "./assets/sass/app.scss";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Nav from "./layouts/Nav";
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
