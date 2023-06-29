import Carousel from "~/Pages/Home/Carousel/Carousel";
import Collections from "~/Pages/Home/Collections/Collections";
import HotDeals from "~/Pages/Home/HotDeals/HotDeals";
import TopSelling from "~/Pages/Home/Widgets/Widgets";
function Home() {
  return (
    <div>
      <Collections />
      <Carousel title="Sảm phẩm mới" id="1" />
      <HotDeals />
      <TopSelling />
    </div>
  );
}

export default Home;
