
import {Welcome} from"./components/P1";
import { ProductCard } from "./components/P2";
import ButtonDemo from "./components/P3";
import Counter from "./components/StateExampleOne";
import ToggleText from "./components/StateExampleTwo"
import'./App.css';
function App() {
  

  return (
    <>
    <ToggleText/>
    <Counter/>
    <Welcome name="Yogita"/>
    <ProductCard
    name="Sony 1000XTHE COLLEXION Wireless Noise Cancelling Headphones"
    price={59990}
    image="https://m.media-amazon.com/images/I/71INUFRcEOL._SX522_.jpg"/>
    {/* */}
    <ButtonDemo/>

    </>
  )
}

export default App
