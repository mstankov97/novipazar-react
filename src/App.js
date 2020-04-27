import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import InputElement from "./components/home/homeComponents";
import FormLogin from "./components/FormLogin/FormLogin";
import ItemList from "./components/itemlist/ItemList"
import CostumNavbar from './components/navbar/navbar'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Mapata from "./components/Mapata/Mapata";

function App() {
    return (
        <div className="App">
            <CostumNavbar/>
            <div className={"container"}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <ItemList></ItemList>
                        </Route>
                        <Route exact path="/mapata">
                            <Mapata></Mapata>
                        </Route>
                        <Route exact path="/login">
                            <FormLogin></FormLogin>
                        </Route>

                    </Switch>
                </Router>
            </div>
        </div>

    );

}

export default App;
