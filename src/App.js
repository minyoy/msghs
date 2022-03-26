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
      const response = await axios.get('https://schoolmenukr.ml/api/high/Q100000247?year=2022&month=3&date=28&allergy=hidden');
      setData(response.data);
      var menulist = response.data.menu[0];
      var breakfast = menulist['breakfast']
      var lunch = menulist['lunch']
      var dinner = menulist['dinner']
    }
    catch(e) {
    console.log(e);
    }
    }

    const TueClick = async() => {
      try{
        const response = await axios.get('https://schoolmenukr.ml/api/high/Q100000247?month=3&date=29&allergy=hidden');
        setData(response.data);
        var menulist = response.data.menu[0];
        var breakfast = menulist['breakfast']
        var lunch = menulist['lunch']
        var dinner = menulist['dinner']
      }
      catch(e) {
      console.log(e);
      }
    }

    const WedClick = async() => {
      try{
        const response = await axios.get('https://schoolmenukr.ml/api/high/Q100000247?month=3&date=30&allergy=hidden');
        setData(response.data);
        var menulist = response.data.menu[0];
        var breakfast = menulist['breakfast']
        var lunch = menulist['lunch']
        var dinner = menulist['dinner']
      }
      catch(e) {
      console.log(e);
      }
    }

    const ThuClick = async() => {
      try{
        const response = await axios.get('https://schoolmenukr.ml/api/high/Q100000247?month=3&date=31&allergy=hidden');
        setData(response.data);
        var menulist = response.data.menu[0];
        var breakfast = menulist['breakfast']
        var lunch = menulist['lunch']
        var dinner = menulist['dinner']
      }
      catch(e) {
      console.log(e);
      }
    }

    const FriClick = async() => {
      try{
        const response = await axios.get('https://schoolmenukr.ml/api/high/Q100000247?month=4&date=1&allergy=hidden');
        setData(response.data);
        var menulist = response.data.menu[0];
        var breakfast = menulist['breakfast']
        var lunch = menulist['lunch']
        var dinner = menulist['dinner']
      }
      catch(e) {
      console.log(e);
      }
    }
    
  return (    
    <div className="App">
      <div>
        <img className='logo' src={logo} alt="logo"></img>
      </div>
      <div id = 'flex-container1'>
        <button onClick={MonClick} className='week'>월</button>
        <button onClick={TueClick} className='week'>화</button>
        <button onClick={WedClick} className='week'>수</button>
        <button onClick={ThuClick} className='week'>목</button>
        <button onClick={FriClick} className='week'>금</button>
      </div>
      <div className='flex-container2'>
        <div className='box'>
          <div className='flex-container3'>
            <img className='fork' src={fork} alt=""></img>
            <div class="today">오늘의 조식</div>
          </div>
          <div className='content'>
            {data && data.menu[0]['breakfast'].length != 0 && <textarea value={JSON.stringify(data.menu[0]['breakfast'], null, 2)} readOnly={true} />}
            {data && data.menu[0]['breakfast'].length == 0 && <textarea>급식이 없습니다</textarea>}
          </div>
        </div>
        <div className='box'>
          <div className='flex-container3'>
            <img className='fork' src={fork} alt=""></img>
            <div class="today">오늘의 중식</div>
          </div>
          <div className='content'>
            {data && data.menu[0]['lunch'].length != 0 && <textarea value={JSON.stringify(data.menu[0]['lunch'], null, 2)} readOnly={true} />}
            {data && data.menu[0]['lunch'].length == 0 && <textarea>급식이 없습니다</textarea>}
          </div>
        </div>
        <div className='box'>
          <div className='flex-container3'>
            <img className='fork' src={fork} alt=""></img>
            <div class="today">오늘의 석식</div>
          </div>
          <div className='content'> 
            {data && data.menu[0]['dinner'].length != 0 && <textarea value={JSON.stringify(data.menu[0]['dinner'], null, 2)} readOnly={true} />}
            {data && data.menu[0]['dinner'].length == 0 && <textarea>급식이 없습니다</textarea>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
