import {React, useState} from "react";
import { useNavigate } from "react-router-dom";

import arrow from "../../assets/Blue Right Arrow.png";
// import { Head } from "../common/Head";
import Navbar from "../common/Navbar";

export const ContactForm = () => {
   const navigate = useNavigate();
     const navigateDefault = () => {
          navigate("/");
     };
     // Create Function Parameters
     const [fullname, setFullname] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const [subject, setSubject] = useState("");
     const [message, setMessage] = useState("");

     async function submitContacts() {
          console.warn(fullname, email, phone, subject, message);
          const formData = new FormData();
          formData.append("fullname", fullname);
          formData.append("email", email);
          formData.append("phone", phone);
          formData.append("subject", subject);
          formData.append("message", message);
          let result = await fetch("http://localhost:8000/api/create-contacts", {
               method: "POST",
               body: formData,
          });
          console.warn("Create Contacts: ", result)
          alert("Data Saved to Database!");
          navigateDefault();
     }
  return (
    <div>
      <Navbar />
    <div>
      <div class="w-full">
        <section>
          <form class="bg-white shadow-md rounded px-5 pt-5 pb-2 m-2">
            <div>
              <center>
                <h1>Get in touch</h1>
                <img src={arrow} width={100} height={100} />
              </center>
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="fullname"
              >
                Fullname
              </label>
              <input
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullname"
                type="text"
                  placeholder="Fullname"
                   onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                required
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                  placeholder="Your email address"
                   onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Contact Number
              </label>
              <input
                required
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="conatctnumber"
                type="phone"
                  placeholder="Contact Number"
                   onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="subject"
              >
                Subject
              </label>
              <input
                required
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                  placeholder="Subject"
                   onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                required
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                type="text"
                placeholder="Your message"
                cols={3}
                  rows={5}
                   onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div class="flex items-center justify-center">
              <button
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={submitContacts}
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
      <p class="text-center text-gray-500 text-xs">
        &copy;2024 imksav Corp. All rights reserved.
      </p>
      </div>
      </div>
  );
};

export default ContactForm;
