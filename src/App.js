import "./index.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Client
import Home from "./components/pages/Home.jsx";
import { Aboutus } from "./components/pages/Aboutus.jsx";
import Programs from "./components/pages/Programs.jsx";
import Blogs from "./components/pages/Blog.jsx";
import ContactForm from "./components/pages/Contact.jsx";
// Server
import AdminHome from "./components/pages/admin/AdminHome.jsx";
// Server-Programs
import AdminPrograms from "./components/pages/admin/Programs.jsx";
import CreatePrograms from "./components/pages/admin/programs/CreatePrograms.jsx";
import ViewPrograms from "./components/pages/admin/programs/ViewPrograms.jsx";
import EditPrograms from "./components/pages/admin/programs/EditPrograms.jsx";
// Server-Blog
import AdminBlogs from "./components/pages/admin/Blogs.jsx";
import CreateBlogs from "./components/pages/admin/blogs/CreateBlogs.jsx";
import ViewBlogs from "./components/pages/admin/blogs/ViewBlogs.jsx";
import EditBlogs from "./components/pages/admin/blogs/EditBlogs.jsx";

// Server-Contact
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
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/contact" element={<AdminContact />} />

          {/* Admin Navbar Functions */}
          {/* Programs Navbar */}
          <Route path="/admin/programs" element={<AdminPrograms />} />
          <Route
            path="/admin/programs/create-programs"
            element={<CreatePrograms />}
          />
          <Route
            path="/admin/programs/display-programs/:id"
            element={<ViewPrograms />}
          />
          <Route
            path="/admin/programs/update-programs/:id"
            element={<EditPrograms />}
          ></Route>

          {/* Blogs Navbar */}
          <Route path="/admin/blogs" element={<AdminBlogs />} />
          <Route path="/admin/blogs/create-blogs" element={<CreateBlogs />} />
          <Route
            path="/admin/blogs/display-blogs/:id"
            element={<ViewBlogs />}
          />
          <Route
            path="/admin/blogs/update-blogs/:id"
            element={<EditBlogs />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
