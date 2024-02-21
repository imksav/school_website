import React from "react";
import arrow from "../../assets/Blue Right Arrow.png";
import { Head } from "../common/Head";
import Navbar from "../common/Navbar";

export const ContactForm = () => {
  return (
    <div>
      <Head />
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
              />
            </div>
            <div class="flex items-center justify-center">
              <button
                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
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
