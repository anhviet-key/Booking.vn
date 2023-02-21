import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import { Reserve } from '../../components/reserve/Reserve';
import { Popup } from '../../components/reserve/Popup';

const Hotel = () => {
  const paramId = useParams();
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [openModel2, setOpenModel2] = useState(false);

  // const [arr, setArr] = useState([]);

  const { data, loading } = useFetch(`/hotels/find/${paramId.id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModel(true);
    } else {
      navigate('/login');
    }
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        'please wait...'
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove('l')}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt="not found"
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove('r')}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow" onClick={handleClick}>
              Đặt ngay!
            </button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Vị trí đẹp cách trung tâm {data.distance}m
            </span>
            <span className="hotelPriceHighlight">
              Đặt kỳ nghỉ hơn {data.cheapestPrice?.toLocaleString()} VNĐ tại
              khách sạn này và nhận taxi sân bay miễn phí.
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt="not found"
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
                <div className="hotelReview">
                  <h4 className="hotelRKey">
                    Đọc xem khách yêu thích điều gì nhất:
                  </h4>
                  <div className="hotelRItem">
                    <div className="hotelReview_item">
                      <div className="hotelRItem__head">
                        <div className="itemLeft">
                          <img
                            src="http://placehold.it/32x32"
                            alt="not found"
                            className="hotelRImg"
                          />
                        </div>
                        <div className="itemRight">
                          <b>Thu</b>
                        </div>
                      </div>
                      <div className="hotelRItem__body">
                        “Nhân viên nhiệt tình, thân thiện Phòng rộng, thoải mái,
                        sang xịn mịn Giá cả hợp lý”
                      </div>
                      <Link to="#">Xem chi tiết</Link>
                    </div>
                    <div className="hotelReview_item">
                      <div className="hotelRItem__head">
                        <div className="itemLeft">
                          <img
                            src="http://placehold.it/32x32"
                            alt="not found"
                            className="hotelRImg"
                          />
                        </div>
                        <div className="itemRight">
                          <b>Thu</b>
                        </div>
                      </div>
                      <div className="hotelRItem__body">
                        “Nhân viên nhiệt tình, thân thiện Phòng rộng, thoải mái,
                        sang xịn mịn Giá cả hợp lý”
                      </div>
                      <Link to="#">Xem chi tiết</Link>
                    </div>
                  </div>
                  <div className="hotelComments hotelReview">
                    <h4>Hỏi đáp về chỗ nghỉ:</h4>
                    <p>
                      Nếu muốn biết thêm về chỗ nghỉ, bạn có thể xem các câu hỏi
                      của khách
                    </p>
                    <h5 style={{ color: 'blue' }}>
                      Chỗ nghỉ thường trả lời trong vài ngày
                    </h5>
                    <div className="hotelQuestion">
                      <div className="hotelQuestion__item">
                        <div className="hotelQuestion__item--top">
                          <span>
                            <svg
                              style={{ width: '32px', height: '32px' }}
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.5 9.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm1.5 0a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm1.445 10.597c-4.086-4.111-10.732-4.132-14.844-.046l-.046.046a.75.75 0 0 0 1.064 1.058l.04-.04a8.996 8.996 0 0 1 12.722.04.75.75 0 0 0 1.064-1.058zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
                            </svg>
                          </span>
                          <b>
                            Hi, can i invite guest/friend to the hotel? To watch
                            world cup
                          </b>
                        </div>
                        <div className="hotelQuestion__item--bottom">
                          <span>
                            <svg
                              style={{ width: '32px', height: '32px' }}
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M24 13.5a6 6 0 0 0-6-6h-3a6 6 0 0 0 0 12h.75l-.53-.22 4.5 4.5a.75.75 0 0 0 1.28-.53v-5.024l-.43.678A5.989 5.989 0 0 0 24 13.502zm-1.5-.002a4.489 4.489 0 0 1-2.57 4.05.75.75 0 0 0-.43.678v5.024l1.28-.53-4.5-4.5a.75.75 0 0 0-.53-.22H15a4.5 4.5 0 1 1 0-9h3a4.5 4.5 0 0 1 4.5 4.5zM6.22 12.22l-3 3 1.28.53v-5.024a.75.75 0 0 0-.43-.678A4.489 4.489 0 0 1 5.998 1.5H9a4.502 4.502 0 0 1 4.313 3.214.75.75 0 0 0 1.438-.428A6.002 6.002 0 0 0 9 0H6a5.988 5.988 0 0 0-2.57 11.404L3 10.726v5.024a.75.75 0 0 0 1.28.53l3-3a.75.75 0 1 0-1.06-1.06z"></path>
                            </svg>
                          </span>
                          <span>Absolutely ! Help yourself</span>
                        </div>
                      </div>
                      <div className="hotelQuestion__item">
                        <div className="hotelQuestion__item--top">
                          <span>
                            <svg
                              style={{ width: '32px', height: '32px' }}
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.5 9.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm1.5 0a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm1.445 10.597c-4.086-4.111-10.732-4.132-14.844-.046l-.046.046a.75.75 0 0 0 1.064 1.058l.04-.04a8.996 8.996 0 0 1 12.722.04.75.75 0 0 0 1.064-1.058zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
                            </svg>
                          </span>
                          <b>
                            Hi, can i invite guest/friend to the hotel? To watch
                            world cup
                          </b>
                        </div>
                        <div className="hotelQuestion__item--bottom">
                          <span>
                            <svg
                              style={{ width: '32px', height: '32px' }}
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M24 13.5a6 6 0 0 0-6-6h-3a6 6 0 0 0 0 12h.75l-.53-.22 4.5 4.5a.75.75 0 0 0 1.28-.53v-5.024l-.43.678A5.989 5.989 0 0 0 24 13.502zm-1.5-.002a4.489 4.489 0 0 1-2.57 4.05.75.75 0 0 0-.43.678v5.024l1.28-.53-4.5-4.5a.75.75 0 0 0-.53-.22H15a4.5 4.5 0 1 1 0-9h3a4.5 4.5 0 0 1 4.5 4.5zM6.22 12.22l-3 3 1.28.53v-5.024a.75.75 0 0 0-.43-.678A4.489 4.489 0 0 1 5.998 1.5H9a4.502 4.502 0 0 1 4.313 3.214.75.75 0 0 0 1.438-.428A6.002 6.002 0 0 0 9 0H6a5.988 5.988 0 0 0-2.57 11.404L3 10.726v5.024a.75.75 0 0 0 1.28.53l3-3a.75.75 0 1 0-1.06-1.06z"></path>
                            </svg>
                          </span>
                          <span>Absolutely ! Help yourself</span>
                        </div>
                      </div>
                    </div>
                    <div className="question" onClick={()=>setOpenModel2(true)}>
                      Đặt câu hỏi
                    </div>
                  </div>
                </div>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Hoàn hảo cho một kỳ nghỉ {days} đêm!</h1>
                <span>
                  Được khách gần đây đánh giá cao ({data.rating}4/5 ⭐)
                </span>
                <div className="tabs">
                  <h4>Các tiện nghi được ưa chuộng nhất :</h4>
                  <ul style={{ margin: '0 15px', padding: '0' }}>
                    {data.amenities?.map((tag) => (
                      <li
                        style={{
                          listStyleType: 'none',
                          margin: '15px 0',
                        }}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <h2>
                  <b>
                    {(
                      days *
                      data.cheapestPrice *
                      options.room
                    )?.toLocaleString()}{' '}
                    VNĐ{' '}
                  </b>
                  ({days} đêm)
                </h2>
                <button onClick={handleClick}>Đặt ngay!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModel && <Reserve setOpen={setOpenModel} hotelId={paramId.id} />}
      {openModel2 && <Popup setOpen={setOpenModel2} />}
    </div>
  );
};

export default Hotel;
