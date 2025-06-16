// import React from 'react';
// import hamburgerImage from '../assets/images/hamburger.jpg';
// import cheeseburgerImage from '../assets/images/cheeseburger.png';
// import friesImage from '../assets/images/fries.png';
// import sodaImage from '../assets/images/soda.jpg';
// import saladImage from '../assets/images/salad.png';
// import nuggetsImage from '../assets/images/';

// const menuItems = [
//   { name: 'Hamburger', price: 80, image: hamburgerImage },
//   { name: 'Cheeseburger', price: 90, image: cheeseburgerImage },
//   { name: 'Fries', price: 50, image: friesImage },
//   { name: 'Soda', price: 30, image: sodaImage },
//   { name: 'Salad', price: 70, image: saladImage },
//   { name: 'Chicken Nuggets', price: 100, image: nuggetsImage },
// ];

// const Menu = () => {
//   const dispatch = useDispatch();

//   const handleAddItem = (item) => {
//     dispatch(addItem(item));
//   };

//   return (
//     <div>
//       <h2>Add Items</h2>
//       <div className="menu-items">
//         {menuItems.map(item => (
//           <MenuItem key={item.name} item={item} addItem={() => handleAddItem(item)} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;

import React from 'react';
import { useDispatch } from 'react-redux';
import MenuItem from './MenuItem';

const menuItems = [
  { name: 'Hamburger', price: 80, imageSrc:"../assets/images/hamburger.jpg" },
  { name: 'Cheeseburger', price: 90, imageSrc: '../assets/images/cheeseburger.png' },
  { name: 'Fries', price: 50, imageSrc: '../assets/images/fries.png' },
  { name: 'Soda', price: 30, imageSrc: '../assets/images/soda.jpg' },
  { name: 'Salad', price: 70, imageSrc: '../assets/images/salad.png' },
  { name: 'Chicken Nuggets', price: 100, imageSrc: '../assets/images/nuggets.png' },
];

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add Items</h2>
      <div className="menu-items">
        {menuItems.map(item => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;

