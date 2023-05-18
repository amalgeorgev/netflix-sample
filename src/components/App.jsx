 import React from 'react';   //rfce
import NavBar from './NavBar/NavBar';
import "./App.css";
import Banner from './Banner/Banner';
import RowPosts from './RowPosts/RowPosts.js';
import {originals, action} from './urls';
  

 function App() {
  return (
     <div>
        <NavBar />
        <Banner />
        <RowPosts title='Netflix Orginals' url={originals} isSmall={false} />
        <RowPosts title='Action' url={action} isSmall={true} />
     </div>
   )
 }

 
 export default App