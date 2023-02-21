import useFetch from '../../hook/useFetch';
import './featured.css';

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=ho chi minh,da nang,ha noi,nha trang'
  );
  return (
    <div className="featured">
      {loading ? (
        'please wait...'
      ) : (
        <>
          <div className="featuredItem">
            <img src="/hochiminh.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Hồ Chí Minh</h1>
              <h2>{data[0]} chỗ nghỉ</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src="/danang.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Đà Nẵng</h1>
              <h2>{data[1]} chỗ nghỉ</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src="/hanoi.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Hà Nội</h1>
              <h2>{data[2]} chỗ nghỉ</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src="/nhatrang.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Nha Trang</h1>
              <h2>{data[3]} chỗ nghỉ</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
