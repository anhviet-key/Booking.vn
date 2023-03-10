import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './manager.css';

export const Manager = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="Mcontainer">
        <div className="Mtop">Danh sách đặt chỗ của bạn</div>
        <div className="Mcontents">
          <div className="Mleft">
            <div className="Mimg">
              <img
                src="https://cdn.pixabay.com/photo/2023/02/04/09/20/castle-7766794_960_720.jpg"
                alt="not found"
              />
            </div>
          </div>
          <div className="Mcenter">
            <div className="Mtitle">
              <span>Tên khách sạn : </span>
            </div>
            <div className="Mtext">
              <span>Địa chỉ : </span>
            </div>
            <div className="Mtext">
              <span>Số phòng : </span>
            </div>
            <div className="Mtext">
              <span>Ngày nhận phòng : </span>
            </div>
            <div className="Mtext">
              <span>Ngày trả phòng: </span>
            </div>
            <div className="Mnotification">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  color="yellow"
                  d="M16.168 2.924L4.51 13.061a.25.25 0 00.164.439h5.45a.75.75 0 01.692 1.041l-2.559 6.066 11.215-9.668a.25.25 0 00-.164-.439H14a.75.75 0 01-.687-1.05l2.855-6.526zm-.452-1.595a1.341 1.341 0 012.109 1.55L15.147 9h4.161c1.623 0 2.372 2.016 1.143 3.075L8.102 22.721a1.149 1.149 0 01-1.81-1.317L8.996 15H4.674c-1.619 0-2.37-2.008-1.148-3.07l12.19-10.6z"
                />
              </svg>
              <span>
                Bạn cần phải đến trước 9 giờ sáng ngày nhận phòng để nhân viên
                xác nhận
              </span>
            </div>
          </div>
          <div className="Mright">
            <div className="Minfo">
              <svg
                fill="currentColor"
                id="Layer_1"
                enable-background="new 0 0 56.69 56.69"
                height="36"
                viewBox="0 0 56.69 56.69"
                width="36"
                xmlns="http://www.w3.org/2000/svg">
                <path d="m50.184 40.273c-1.73.438-3.506.659-5.276.659-9.685 0-18.221-6.535-20.758-15.893-1.976-7.293-.054-14.931 5.143-20.431l1.693-1.792-2.463.106c-1.897.081-3.778.372-5.589.862-13.562 3.679-21.605 17.704-17.929 31.268 3.004 11.082 13.112 18.821 24.582 18.821 2.246 0 4.494-.301 6.682-.894 6.265-1.699 11.596-5.681 15.011-11.211l1.297-2.099zm-14.439 10.777c-2.017.546-4.089.823-6.158.823-10.569 0-19.883-7.132-22.652-17.345-3.388-12.499 4.023-25.424 16.522-28.811.902-.244 1.823-.435 2.755-.57-4.437 5.8-5.932 13.26-3.992 20.417 2.772 10.227 12.103 17.369 22.688 17.369 1.104 0 2.209-.079 3.306-.235-3.122 4.067-7.474 6.996-12.469 8.352zm-5.11-35.313 4.904-1.393 1.5-4.87 1.394 4.902 4.872 1.501-4.905 1.394-1.5 4.871-1.393-4.902zm10.665 8.394 3.409-1.116.918-3.466 1.116 3.407 3.467.922-3.408 1.114-.921 3.466-1.114-3.407z" />
              </svg>
              <div>Xem</div>

            </div>
            <div
              className="
            Mdelete
            ">
              <svg
                fill="currentColor"
                id="Layer_1"
                enable-background="new 0 0 56.69 56.69"
                height="36"
                viewBox="0 0 56.69 56.69"
                width="36"
                xmlns="http://www.w3.org/2000/svg">
                <path d="m50.184 40.273c-1.73.438-3.506.659-5.276.659-9.685 0-18.221-6.535-20.758-15.893-1.976-7.293-.054-14.931 5.143-20.431l1.693-1.792-2.463.106c-1.897.081-3.778.372-5.589.862-13.562 3.679-21.605 17.704-17.929 31.268 3.004 11.082 13.112 18.821 24.582 18.821 2.246 0 4.494-.301 6.682-.894 6.265-1.699 11.596-5.681 15.011-11.211l1.297-2.099zm-14.439 10.777c-2.017.546-4.089.823-6.158.823-10.569 0-19.883-7.132-22.652-17.345-3.388-12.499 4.023-25.424 16.522-28.811.902-.244 1.823-.435 2.755-.57-4.437 5.8-5.932 13.26-3.992 20.417 2.772 10.227 12.103 17.369 22.688 17.369 1.104 0 2.209-.079 3.306-.235-3.122 4.067-7.474 6.996-12.469 8.352zm-5.11-35.313 4.904-1.393 1.5-4.87 1.394 4.902 4.872 1.501-4.905 1.394-1.5 4.871-1.393-4.902zm10.665 8.394 3.409-1.116.918-3.466 1.116 3.407 3.467.922-3.408 1.114-.921 3.466-1.114-3.407z" />
              </svg>
              <div>Hủy</div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
