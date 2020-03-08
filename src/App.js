import React, { Component,PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import { routers } from "./router"
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
      <Router>  
      <ul className="AppNav">
                <li><NavLink to="/home" className="NavBack" activeClassName="active" activeStyle={{color: '#fff'}}></NavLink></li>
                <li><NavLink to="/home" activeClassName="active" activeStyle={{color: '#fff','border-bottom':"1px solid #fff"}}>首页</NavLink></li>
                <li><NavLink to="/ticket" activeClassName="active" activeStyle={{color: '#fff','border-bottom':"1px solid #fff"}}>购票</NavLink></li>
                <li><NavLink to="/shopping" activeClassName="active" activeStyle={{color: '#fff','border-bottom':"1px solid #fff"}}>商城</NavLink></li>
                <li><NavLink to="/find" activeClassName="active" activeStyle={{color: '#fff','border-bottom':"1px solid #fff"}}>发现</NavLink></li>
                <li><NavLink to="/center" activeClassName="active" activeStyle={{color: '#fff',}}>个人</NavLink></li>
        </ul>
      <Switch>
        {
            routers.map((item)=>{
            return <Route key={item.path} path={item.path} component={item.component} />
            })
        }
        <Redirect from="/" to="/home" exact />
        <Redirect to="/404" />
        </Switch>
      </Router>
    
      </div>
    );
  }

}

