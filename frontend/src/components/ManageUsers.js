import React, { useEffect, useState } from "react";
import axios from "axios";

import "../css/style.css";

const ManageUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("http://localhost:7000/admin/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  const handleUserClick = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:7000/admin/user/${userId}`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <>
      <h1 className="table">Manage Users</h1>

      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>
                <button onClick={() => handleUserClick(user._id)}>
                  {user.email}
                </button>
              </td>
              <td>
                <form
                  action="/admin/update-role"
                  method="post"
                  className="manage-user-form"
                >
                  <input type="hidden" name="id" value={user._id} />
                  <select name="role" id="role">
                    <option value="ADMIN" selected={user.role === "ADMIN"}>
                      Admin
                    </option>
                    <option value="HR" selected={user.role === "HR"}>
                      Hr
                    </option>
                    <option
                      value="EMPLOYEE"
                      selected={user.role === "EMPLOYEE"}
                    >
                      Employee
                    </option>
                  </select>
                  <input type="submit" value="update" />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ManageUsersPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import "../css/style.css";

// const ManageUsersPage = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:7000/admin/users");
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     getUsers();
//   }, []);

//   return (
//     <>
//       <h1 className="table">Manage Users</h1>

//       <table className="table">
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>email</th>
//             <th>role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user._id}</td>
//               <td>
//                 <a href={`/admin/user/${user._id}`}>{user.email}</a>
//               </td>
//               <td>
//                 <form
//                   action="/admin/update-role"
//                   method="post"
//                   className="manage-user-form"
//                 >
//                   <input type="hidden" name="id" value={user.id} />
//                   <select name="role" id="role">
//                     <option value="ADMIN" selected={user.role === "ADMIN"}>
//                       Admin
//                     </option>
//                     <option
//                       value="HR"
//                       selected={user.role === "HR"}
//                     >
//                       hr
//                     </option>
//                     <option value="EMPLOYEE" selected={user.role === "EMPLOYEE"}>
//                       Employee
//                     </option>
//                   </select>
//                   <input type="submit" value="update" />
//                 </form>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default ManageUsersPage;
