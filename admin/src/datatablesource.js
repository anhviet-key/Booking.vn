export const userColumns = [
  { field: 'id', headerName: 'ID', width: 20 },
  {
    field: 'user',
    headerName: 'User',
    width: 330,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.img ||
              'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814050_960_720.png'
            }
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 350,
  },

  {
    field: 'country',
    headerName: 'country',
    width: 200,
  },
  {
    field: 'city',
    headerName: 'city',
    width: 220,
  },
  {
    field: 'phone',
    headerName: 'phone',
    width: 200,
  },
  // {
  //   field: 'status',
  //   headerName: 'Status',
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

export const hotelColumns = [
  { field: '_id', headerName: 'ID', width: 260 },
  {
    field: 'name',
    headerName: 'Name',
    width: 350,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 200,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 340,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 200,
  },
];

export const roomColumns = [
  { field: '_id', headerName: 'ID', width: 260 },
  {
    field: 'title',
    headerName: 'Title',
    width: 350,
  },
  {
    field: 'desc',
    headerName: 'Description',
    width: 540,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
  },
  {
    field: 'maxPeople',
    headerName: 'Max People',
    width: 100,
  },
];

//temporary data
// export const userRows = [
//   {
//     id: 1,
//     username: 'Snow',
//     img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     status: 'active',
//     email: '1snow@gmail.com',
//     age: 35,
//   },
//   {
//     id: 2,
//     username: 'Jamie Lannister',
//     img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     email: '2snow@gmail.com',
//     status: 'passive',
//     age: 42,
//   },
//   {
//     id: 3,
//     username: 'Lannister',
//     img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     email: '3snow@gmail.com',
//     status: 'pending',
//     age: 45,
//   },
//   {
//     id: 4,
//     username: 'Stark',
//     img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     email: '4snow@gmail.com',
//     status: 'active',
//     age: 16,
//   },
//   {
//     id: 5,
//     username: 'Targaryen',
//     img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     email: '5snow@gmail.com',
//     status: 'passive',
//     age: 22,
//   },
//   {
//     id: 6,
//     username: 'Melisandre',
//     img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     email: '6snow@gmail.com',
//     status: 'active',
//     age: 15,
//   },
//   {
//     id: 7,
//     username: 'Clifford',
//     img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     email: '7snow@gmail.com',
//     status: 'passive',
//     age: 44,
//   },
//   {
//     id: 8,
//     username: 'Frances',
//     img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     email: '8snow@gmail.com',
//     status: 'active',
//     age: 36,
//   },
//   {
//     id: 9,
//     username: 'Roxie',
//     img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     email: 'snow@gmail.com',
//     status: 'pending',
//     age: 65,
//   },
//   {
//     id: 10,
//     username: 'Roxie',
//     img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     email: 'snow@gmail.com',
//     status: 'active',
//     age: 65,
//   },
// ];
