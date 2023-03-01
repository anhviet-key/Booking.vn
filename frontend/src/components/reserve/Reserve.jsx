import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import useFetch from '../../hook/useFetch';
import Swal from 'sweetalert2';
import './reserve.css';

export const Reserve = ({ setOpen, hotelId }) => {
  const [selectdRooms, setSelectedRooms] = useState([]);

  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);
  // const getDatesInRange = (startDate, endDate) => {
  //   const start = new Date(startDate);
  //   const end = new Date(endDate);

  //   const date = new Date(start.getTime());

  //   let list = [];
  //   while (date <= end) {
  //     list.push(new Date(date).getTime());
  //     date.setDate(date.getDate() + 1);
  //   }
  //   return list;
  // };
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  const isAvailiable = (room) => {
    const isFound = room?.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectdRooms, value]
        : selectdRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    Swal.fire({
      title: 'Bạn chắc chắn chứ ?',
      text: 'Bạn có thể hủy trong phần quản lý của bạn.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Vâng, tôi chắc chắn',
      cancelButtonText: 'Tôi muốn hủy',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await Promise.all(
            selectdRooms.map((roomId) => {
              const res = axios.put(`/rooms/availability/${roomId}`, {
                dates: allDates,
              });
              return res.data;
            })
          );
          // await axios.put(`/users/`{id}`);
          setOpen(false);
          // navigate('/');
        } catch (error) {
          console.log(error);
        }
        Swal.fire(
          'Đặt thành công',
          'Cảm ơn vì đã lựa chọn dịch vụ của chúng tôi.',
          'success'
        );
      }
    });
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Chọn phòng của bạn: </span>
        {data.map((item, i) => (
          <div className="rItem" key={i}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Người tối đa: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price.toLocaleString()} VNĐ</div>
            </div>
            {item.roomNumber?.map((room, i) => (
              <div className="room" key={i}>
                <label htmlFor={room._id}>{room.number}</label>
                <input
                  id={room._id}
                  type="checkbox"
                  value={room._id}
                  className="disabledClass"
                  onChange={handleSelect}
                  disabled={!isAvailiable(room.unavailable)}
                  title={
                    !isAvailiable(room.unavailable)
                      ? 'Phòng đã được thuê'
                      : 'Phòng trống'
                  }
                />
              </div>
            ))}
          </div>
        ))}
        {selectdRooms.length > 0 ? (
          <button onClick={handleClick} className="rButton">
            Xác nhận
          </button>
        ) : (
          <button className="rButton">Bạn chưa chọn phòng nào...</button>
        )}
      </div>
    </div>
  );
};
