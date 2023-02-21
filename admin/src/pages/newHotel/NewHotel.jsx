import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import { hotelInputs } from '../../formSource';
import useFetch from '../../hook/useFetch';
import axios from 'axios';

const dataTags = [
  '🚗 Xe đưa đón sân bay',
  '🏊 Hồ bơi ngoài trời',
  '🚭 Phòng không hút thuốc',
  '💆 Trung tâm Spa & chăm sóc sức khoẻ',
  '🤾‍♀️ Trung tâm thể dục',
  '🚪 Dịch vụ phòng',
  '🅿️ Chỗ đỗ xe miễn phí',
  '🛜 Wi-Fi miễn phí',
  '👪 Phòng gia đình',
  '🏪 Lễ tân 24 giờ',
];

const NewHotel = () => {
  const [files, setFiles] = useState('');
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const [tags, setTags] = useState([]);
  const [option, setOption] = useState(false);

  const { data, loading, error } = useFetch('/rooms');
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  const handleSelectOption = (e) => {
    setOption(Boolean(e.target.value));
    // console.log(typeof Boolean(e.target.value));
  };
  const handleDoubleClick = (e) => {
    if (!tags.includes(e.currentTarget.textContent)) {
      tags.push(e.currentTarget.textContent);
      setTags((pre) => [...pre]);
    }
  };
  const handleDoubleRemove = (e, i) => {
    // delete tags[e.currentTarget.textContent];
    // // setTags((pre) => [...pre]);
    // console.log(delete tags[e.currentTarget.textContent]);
    // console.log(tags);
    tags.splice(i, 1);
    setTags((pre) => [...pre]);
  };
  // console.log(tags);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append('file', file);
          data.append('upload_preset', 'upload');
          const uploadRes = await axios.post(
            'https://api.cloudinary.com/v1_1/dsylymb6j/image/upload',
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );
      const newHotel = {
        ...info,
        rooms,
        featured: option,
        amenities: tags,
        photos: list,
      };
      await axios.post('/hotels', newHotel);
    } catch (error) {}
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: 'none' }}
                />
              </div>
              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleSelectOption}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="selectRoom">
                <label>Tags</label>
                <div className="tags">
                  {tags.map((tag, i) => (
                    <div key={i}>
                      <b onDoubleClick={(e) => handleDoubleRemove(e, i)}>
                        {tag}
                      </b>
                    </div>
                  ))}
                </div>
                <h4>Choose</h4>

                <div className="tags">
                  {dataTags.map((item, i) => {
                    return (
                      !tags.includes(item) && (
                        <span key={i} onDoubleClick={handleDoubleClick}>
                          {item}
                        </span>
                      )
                    );
                  })}
                </div>
              </div>
              <div className="selectRoom">
                <label>Room</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? 'loading'
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
                        </option>
                      ))}
                </select>
              </div>

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
