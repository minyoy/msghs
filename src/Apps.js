import './App.css';
import logo from "./img/logo.PNG"
import fork from "./img/fork.png"
import React, {useState} from 'react';
import axios from "axios";

function App() {

    const[data, setData] = useState(null);
    var menu = new Array();
  
    const MonClick = async() => {
    try{
      const response = await axios.get('https://schoolmenukr.ml/api/high/Q100000247?month=1&date=4&allergy=hidden');
      setData(response.data);
      console.log(response.data);
      console.log(response.data.menu);
      var menulist = response.data.menu[0];
      console.log(menulist);
      console.table(menulist);

      var breakfast = menulist['breakfast']
      console.log(breakfast);
      console.table(breakfast)

      var lunch = menulist['lunch']
      console.log(lunch);
      console.table(lunch)

      var dinner = menulist['dinner']
      console.log(dinner);
      console.table(dinner)
    }catch(e) {
      console.log(e);
    }

  return (    
    <div className="App">
      <div>
        <img className='logo' src={logo} alt="logo"></img>
      </div>
      <div id = 'flex-container1'>
        <button onClick={MonClick} className='week'>Mon</button>
        <button className='week'>Tue</button>
        <button className='week'>Wed</button>
        <button className='week'>Thu</button>
        <button className='week'>Fri</button>
      </div>
      <div className='flex-container2'>
        <div className='box'>
          <div className='flex-container3'>
            <img className='fork' src={fork} alt=""></img>
            <div class="today">오늘의 조식</div>
          </div>
          <div className='content' word-break="keep-all" width="50px" word-wrap="break-word">
            {data && <textarea value={JSON.stringify(data.menu[0]['breakfast'], null, 2)} readOnly={true} />}
          </div>
        </div>
        <div className='box'>
          <div className='flex-container3'>
            <img className='fork' src={fork} alt=""></img>
            <div class="today">오늘의 중식</div>
          </div>
          <div className='content' word-break="keep-all" width="50px" word-wrap="break-word">
            {data && <textarea value={JSON.stringify(data.menu[0]['lunch'], null, 2)} readOnly={true} />}
          </div>
        </div>
        <div className='box'>
          <div className='flex-container3'>
            <img className='fork' src={fork} alt=""></img>
            <div class="today">오늘의 석식</div>
          </div>
          <div className='content' word-break="keep-all" width="50px" word-wrap="break-word">
            {data && <textarea value={JSON.stringify(data.menu[0]['dinner'], null, 2)} readOnly={true} />}
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default App;