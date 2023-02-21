import { Link } from 'react-router-dom';
import './searchItem.css';

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">
          {item.distance}m đến trung tâm thành phố
        </span>
        <span className="siTaxiOp">Taxi sân bay miễn phí</span>
        <span className="siSubtitle">Căn hộ dạng Studio có Máy lạnh</span>
        <span className="siFeatures">{item.des}</span>
        <span className="siCancelOp">Hủy miễn phí</span>
        <span className="siCancelOpSubtitle">
          Bạn có thể hủy sau, vì vậy hãy khóa mức giá tuyệt vời này ngay hôm
          nay!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Xuất sắc</span>
            <button>{item.rating}/5 ⭐</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">
            {item.cheapestPrice.toLocaleString()} VNĐ
          </span>
          <span className="siTaxOp">Đã bao gồm thuế và phí</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Xem phòng trống</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
