
import './App.css';
import Counter from './counter';
import { useState } from 'react';

function App() {
  const [darkMode,setDarkMode] = useState(false);

  const [show,setnoshow] =useState(false);
  
  return (
    <div className={darkMode ? "container dark":"container"}>
      <h1>Click Counter App</h1>
      <Counter/>
      <div className='theme'>
      <button className='btn_t' onClick={()=> setDarkMode(!darkMode)}>
        {darkMode ? "switch to light":"switch to dark"}
      </button></div>
      <div className='text'>
      <button className='show' onClick={()=>setnoshow(true)}>Show text</button>
      <button className='notshow' onClick={()=>setnoshow(false)}>Not show text</button>
      {show && <p>Hello</p>}</div>
    </div>
  );
}


export default App;
