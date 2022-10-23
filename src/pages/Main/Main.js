// import React from 'react';
// import MainBannerCarousel from './MainBannerCarousel/MainBannerCarousel';
// import MainContentsBox from './MainContentsBox/MainContentsBox';
// import Nav from '../../components/Nav/Nav';
// import './Main.scss';

// const Main = () => {
//   return (
//     <div className="main">
//       <Nav />
//       <MainBannerCarousel />
//       <MainContentsBox />
//     </div>
//   );
// };

// export default Main;
import React from 'react';
import Nav from '../../components/Nav/Nav';
import List from '../List/List';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Nav />
      <List />
    </div>
  );
};

export default Main;
