import "./index.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactForm from "./components/pages/Contact.jsx";
import { Aboutus } from "./components/pages/Aboutus.jsx";
import Home from "./components/pages/Home.jsx";
import Programs from "./components/pages/Programs.jsx";
import Blogs from "./components/pages/Blog.jsx";
import AdminBlogs from "./components/pages/admin/blogs/Blogs.jsx";
import AdminHome from "./components/pages/admin/AdminHome.jsx";
import AdminPrograms, { CreatePrograms, EditPrograms, UpdatePrograms} from "./components/pages/admin/Programs.jsx";
import AdminContact from "./components/pages/admin/AdminContact.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactForm />} />
          {/* Admin Panel */}
          <Route path="/admin" element={<AdminHome />}/>
          <Route path="/admin/programs" element={<AdminPrograms />} />
          <Route path="/admin/blogs" element={<AdminBlogs />} />
            <Route path="/admin/contact" element={<AdminContact />} />
          
          {/* Admin Navbar Functions */}
          {/* Programs Navbar */}
          <Route path="/admin/programs/create-programs" element={<CreatePrograms />} />
          <Route path="/admin/programs/update-programs/:id" element={<UpdatePrograms />} />


          
        </Routes>
      </Router>
    </div>
  );
}

export default App;