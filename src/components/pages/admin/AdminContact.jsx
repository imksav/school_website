import React, {useEffect, useState} from "react";
import axios from "axios";

import AdminNavbar from "./AdminNavbar";

export const AdminContact = ({ contacts }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/display-contacts/"
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchContacts();
  }, [contacts]);
  return (
    <>
      <AdminNavbar />
      <div class="container max-w-7xl mx-auto mt-8">
      <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      ID
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Fullname
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Email
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Phone
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Subject
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Message
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Time
                    </th>
                    <th
                      class="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50"
                      colspan="3"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody class="bg-white">
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div class="flex items-center">{item.id}</div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div class="text-sm leading-5 text-gray-900">
                          {item.fullname}
                        </div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.email}</p>
                      </td>

                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.phone}</p>
                      </td>
                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.subject}</p>
                      </td>
                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.message}</p>
                      </td>
                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.created_at}</p>
                      </td>
                 </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default AdminContact;
