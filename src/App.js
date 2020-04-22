import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import InputElement from "./components/home/homeComponents";
import ItemList from "./components/itemlist/ItemList"
import CostumNavbar from './components/navbar/navbar'
function App() {
  return (
    <div className="App">
        <CostumNavbar></CostumNavbar>
        <div className='container'>
            <div className='row'>
                <div className='col-4'> <InputElement/>
                    <ItemList/> </div>
            </div>
        </div>


    </div>
  );
}

export default App;
