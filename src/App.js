import './App.css';
// import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
// import QRCodeGenerator from './components/qr-code-generator';
// import ImageSlider from './components/image-slider';
// import LoadMoreData from './components/load-more-data';
// import TreeView from './components/tree-view';
// import Accordian from './components/accordian';
// import RandomColor from './components/random-color';
// import StarRating from './components/star-rating';
// import menus from './components/tree-view/data'

function App() {
  
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </div>
  );
}

export default App;
