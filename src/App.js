import './index.css'
import './App.css'
import '../src/components/common/header.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from './components/pages/Contact.jsx';
import { Aboutus } from './components/pages/Aboutus.jsx';
import { Head } from './components/common/Head.jsx';
import Navbar from './components/common/Navbar.jsx';



function App() {
  return (
    <div className="App">
      <Router>
        <Head />
        <Navbar />
        <Routes>
          <Route path='/about' element={<Aboutus />}/>
          <Route path='/contact' element={<ContactForm />}>

          </Route>
        </Routes>
      </Router>
      {/* <ContactForm/> */}
    </div>
  );
}

export default App;
