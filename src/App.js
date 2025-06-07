import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import ProductCategory from './Category/ProductCategory';
import ProductsSlider from './Category/ProductsSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App bg-gray-100 w-full h-screen">
      <Header/>
      <ProductCategory/>
      <ProductsSlider/>
    </div>
  );
}

export default App;
