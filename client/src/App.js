import Homepage from "./components/Homepage.js";
import Checkout from "./components/Checkout.js"

import { Route, Routes } from "react-router-dom"

import UserProvider from "./context/UserProvider.js"

function App() {
  return (   
      <UserProvider> 
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </UserProvider> 

  );
}
export default App;