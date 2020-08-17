import React from 'react';
import Navbars from './components/navbar';
import Slideshow from './components/slideshow'
import WelcomeCopy from './components/robintro'
import './App.css'
import { Street } from './street'
import {Layout} from './components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavigationBar} from './components/newnav'

function App() {
  return (
    <Layout>
<div>

<Navbars/>
<Slideshow/>
<WelcomeCopy/>

</div>
</Layout>

)
}


export default App;
