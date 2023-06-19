import './App.css';
// import Barazmall from './Components/BarazMall/Barazmall';
import Carousel from './Components/Carousel/Carousel';
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar';
import Navbar from './Components/Navbar/Navbar';
import TopBanner from './Components/TopBanner/TopBanner';
import Products from './Components/Products/products'
import flashSaleData from './data/flashSaleData';
import barazMallData from './data/barazMallData';

function App() {
  return (
    <main>
      <Navbar />
      <LogoSearchBar />
      <Carousel />
      <TopBanner />
      <Products title='FLASHSALE' products={flashSaleData}/>
      <Products title='BarazMall' products={barazMallData}/>
    </main>
  );
}

export default App;
