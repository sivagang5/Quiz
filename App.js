import logo from './logo.svg';
import './App.css';
import React from "react";
import Title from './Title.js';
import Questions from './Questions.js';

function App() {
  return (
    <div style={{display:'flex', flexDirection:'column',margin:'20px'}}>

      <div style={{backgroundColor:'#8fc9d9', margin:'10px', paddingRight:'10px', paddingLeft:'10px'}}>
        <Title/>
      </div>

      <div style={{backgroundColor:'#bedde6', margin:'10px', padding:'10px'}}>
        <Questions/>
      </div>
      
    </div>
  );
}
// 72bddb d8e5eb
export default App;