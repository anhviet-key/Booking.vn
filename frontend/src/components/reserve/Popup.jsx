import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const Popup = ({ setOpen, userx }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="reserve">
      <div className="rContainer" style={{ width: 500 }}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <div>
          <h3 style={{ margin: '10px 0' }}>
            Bạn không tìm thấy câu trả lời mình đang tìm? Hãy hỏi câu hỏi về chỗ
            nghỉ
          </h3>
          <form action="">
            {user || userx ? (
              ''
            ) : (
              <div>
                <label style={{ display: 'block' }} htmlFor="email">
                  Địa chỉ email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Nhập email . . ."
                  style={{
                    width: '100%',
                    margin: '10px 0',
                    border: '1px solid #ccc',
                    padding: '10px 5px',
                    fontSize: '16px',
                  }}
                />
              </div>
            )}
            <div>
              <label style={{ display: 'block' }} htmlFor="text">
                Nhập câu hỏi của bạn ở đây:
              </label>
              <textarea
                name="text"
                id="textarea"
                cols="30"
                rows="5"
                style={{
                  width: '100%',
                  margin: '10px 0',
                  border: '1px solid #ccc',
                  padding: '10px 5px',
                  fontSize: '16px',
                }}
                placeholder="Ví dụ: có dịch vụ phòng không"></textarea>
              <p style={{ color: '#ccc' }}>300 ký tự</p>
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                marginTop: '10px',
                fontWeight: 'bolder',
                padding: '10px 0',
                backgroundColor: '#0071c2',
                color: '#fff',
              }}>
              Gửi câu hỏi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
