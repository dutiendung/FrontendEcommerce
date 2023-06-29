import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GET_DEALS } from "~/Services/Api/apiServices";

function HotDeals({ displayBtn = "" }) {
  const [endDate, setEndDate] = useState("");
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interver = useRef();
  const startTimer = () => {
    const countDownDate = new Date(endDate).getTime();
    interver = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interver.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    if (!endDate) {
      GET_DEALS("Deals").then((item) => {
        return setEndDate(item.data.ends);
      });
    }
    if (endDate) {
      startTimer();
      return () => clearInterval(interver.current);
    }
  });
  return (
    <div id="hot-deal" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hot-deal">
              <ul className="hot-deal-countdown">
                <li>
                  <div>
                    <h3>{timerDays}</h3>
                    <span>Ngày</span>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>{timerHours}</h3>
                    <span>Giờ</span>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>{timerMinutes}</h3>
                    <span>Phút</span>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>{timerSeconds}</h3>
                    <span>Giây</span>
                  </div>
                </li>
              </ul>
              <h2 className="text-uppercase">Khuyến mãi hấp dẫn tuần này</h2>
              <p>Sảm phẩm mới giảm giá 10%</p>
              <Link to={"discount-products"} reloadDocument>
                <div
                  className={`primary-btn cta-btn text-decoration-none ${displayBtn}`}
                >
                  Mua ngay
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotDeals;
