import logo from './logo.svg';
import './App.css';
// import Pr1 from './Pr1';
// import Task1 from './Task1'
import Task2 from './Task2'
import {Add,Sub} from './Task2'
import {Task4,Task5} from './Task4'

import Task6 from './Task6'

import Task7 from './Task7'

import Task8 from './Task8'

import Task9 from './Task9'

import Main from './components/Main'

import Hook1 from './components/Hook'

import US3 from './components/US3'

import US4 from './components/US4'

import US5 from './components/US5'

import US6 from './components/US6'

import US7 from './components/US7';
import US8 from './components/US8';






function App() {
  const item = 'mobile'
  const arr = {name:'abc',uni:'lju'}
  const obj = [{name:'mobile',img:'logo192.png',price:'15000',disc:'Hello Mi note 11'},{name:'mobile',img:'logo192.png',price:'20000',disc:'Hello Mi note 12'},{name:'mobile',img:'logo192.png',price:'35000',disc:'Hello Mi note 12 Pro'}]


  return (
    <div>
      {/* <h1>Hello from app.js</h1> */}
      {/* <Pr1 />
      <Task1 /> */}
      {/* <Add />
      <Sub /> */}
      {/* <Task2 />       */}

      {/* <Task4 name='Laptop' price = '50000'></Task4>
      <Task4 name='TV' price = '35000'></Task4>
      <Task4 name={item} price = '25000'></Task4>
      <Task5 data={arr}></Task5> */}

      {/* <Task6 img='logo192.png' name='Mobile' price='15000' disc='Hello Mi note 11'></Task6>
      <Task6 img='logo192.png' name='Mobile' price='20000' disc='Hello Mi note 12'></Task6>
      <Task6 img='logo192.png' name='Mobile' price='15000' disc='Hello Mi note 12 Pro'></Task6> */}
        
      {/* <Task7/> */}

      {/* <Task8 obj={obj}/> */}

      {/* <Task9/> */}

        {/* <Main/> */}

        {/* <Hook1/> */}

        {/* <US3/> */}

        {/* <US4/> */}

        {/* <US5/> */}

        {/* <US6/> */}

        {/* <US7/> */}

        <US8/>

    </div>
  );
}

export default App;
