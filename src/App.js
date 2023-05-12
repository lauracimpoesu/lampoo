import React from 'react';
import Navbar from './components/Navbar';
import Wishlist from "./components/Wishlist";
import { Discount } from './components/Discount';

function App() {
  return (
    <div>
      <Navbar />
      <Discount />
      <Wishlist />
    </div>
  );
}

export default App;
