import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from 'react-responsive'
import Buttonoption from "./ButtonSelection";

import UploadPicture from "./UploadPicture";
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

function App() {
  return (

    
    <div className="App">
          <Tablet>Tablet Display</Tablet>
    <Mobile>Mobile Display</Mobile>
    <Desktop>Desktop/Laptop Display</Desktop>
    <div className="mb-2">
    <Buttonoption />
    <UploadPicture/>
<div>


</div>

  </div>



    

    
 
    </div>
  );
}

export default App;
