import './index.css'
import './App.css'
import '../src/components/common/header.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from './components/pages/Contact.jsx';
import { Aboutus } from './components/pages/Aboutus.jsx';
import { Head } from './components/common/Head.jsx';
import Navbar from './components/common/Navbar.jsx';
import Home from './components/pages/home.jsx';
import Programs from './components/pages/Programs.jsx';
import Blogs from './components/pages/Blog.jsx';
import Events from './components/pages/Events.jsx';
import Teams from './components/pages/Teams.jsx';
import Downloads from './components/pages/Downloads.jsx';



function App() {
  return (
    <div className="App">
      <Router>
        <Head />
        <Navbar />
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/events' element={<Events />}/>
          <Route path='/teams' element={<Teams />}/>
          <Route path='/downloads' element={<Downloads />}/>
          
          <Route path='/contact' element={<ContactForm />}>

          </Route>
        </Routes>
      </Router>
      {/* <ContactForm/> */}
    </div>
  );
}

export default App;
