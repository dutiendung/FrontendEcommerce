import Carousel from "~/Pages/Home/Carousel/Carousel";
import Collections from "~/Pages/Home/Collections/Collections";

function Home() {
  return (
    <div>
      <Collections />
      <Carousel title="Sảm phẩm mới" id="1" />
    </div>
  );
}

export default Home;
