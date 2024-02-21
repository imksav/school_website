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
import AddBlogs from "./components/pages/admin/AddBlogs.jsx";
import AdminHome from "./components/pages/admin/AdminHome.jsx";
import AddPrograms from "./components/pages/admin/AddPrograms.jsx";
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
          <Route path="/admin" element={<AdminHome />}>
            <Route path="/admin/add_programs" element={<AddPrograms />} />
            <Route path="/admin/add_blogs" element={<AddBlogs />} />
            <Route path="/admin/add_events" element={<AddEvents />} />
            <Route path="/admin/add_teams" element={<AddTeams />} />
            <Route path="/admin/add_downloads" element={<AddDownloads />} />
          </Route>
        </Routes>
      </Router>
      {/* <ContactForm/> */}
    </div>
  );
}

export default App;
