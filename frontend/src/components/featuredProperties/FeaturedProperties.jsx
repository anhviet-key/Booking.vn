import useFetch from '../../hook/useFetch';
import './featuredProperties.css';

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch('/hotels?featured=true&limit=4');

  return (
    <div className="fp">
      {loading
        ? 'please wait...'
        : data.map((item, i) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[i]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Bắt đầu từ {item.cheapestPrice.toLocaleString()} VNĐ
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}4/5 ⭐</button>
                  <span>Xuất sắc</span>
                </div>
              )}
            </div>
          ))}
    </div>
  );
};

export default FeaturedProperties;
