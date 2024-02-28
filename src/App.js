import "./index.css";
import "./App.css";
import "../src/components/common/header.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactForm from "./components/pages/Contact.jsx";
import { Aboutus } from "./components/pages/Aboutus.jsx";
import Home from "./components/pages/Home.jsx";
import Programs from "./components/pages/Programs.jsx";
import Blogs from "./components/pages/Blog.jsx";
import Events from "./components/pages/Events.jsx";
import Teams from "./components/pages/Teams.jsx";
import Downloads from "./components/pages/Downloads.jsx";
import AdminBlogs from "./components/pages/admin/Blogs.jsx";
import AdminHome from "./components/pages/admin/AdminHome.jsx";
import AdminPrograms, { CreatePrograms, UpdatePrograms} from "./components/pages/admin/Programs.jsx";
import AddTeams from "./components/pages/admin/AddTeams.jsx";
import AddEvents from "./components/pages/admin/AddEvents.jsx";
import AddDownloads from "./components/pages/admin/AddDownloads.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<ContactForm />} />
          {/* Admin Panel */}
          <Route path="/admin" element={<AdminHome />}/>
          <Route path="/admin/programs" element={<AdminPrograms />} />
            <Route path="/admin/blogs" element={<AdminBlogs />} />
            <Route path="/admin/events" element={<AddEvents />} />
            <Route path="/admin/teams" element={<AddTeams />} />
          <Route path="/admin/downloads" element={<AddDownloads />} />
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
