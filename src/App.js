import React,{Component, useState, useEffect}  from 'react';
import logo from './logo.svg';
import './App.css';
import Cursos from './componentes/Cursos';
import Alumnos from './componentes/Alumnos';
import MenuAppBar from './componentes/MenuAppBar';
import { BrowserRouter as Router, Route, Link, useParams, Switch, useLocation, useHistory } from 'react-router-dom';

export default function App() {

  return(
    <Router>
      <MenuAppBar />
        <Route exact path = "/">
          <Cursos />
        </Route>
        <Route exact path = "/alumnos" component = { Alumnos } />
    </Router>
  )
}