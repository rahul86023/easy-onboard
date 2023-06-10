import React, { useEffect, useState } from "react";
import axios from "axios";

import "../css/style.css";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user._id;

        console.log(userId);
        const response = await axios.get(
          `http://localhost:7000/admin/user/${userId}`
        );
        const userData = response.data;
        setUser(userData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      <h1>
        <span className="goback" onClick={() => window.history.back()}>
          ←
        </span>
        Profile
      </h1>

      {user && (
        <div className="profile">
          <div>
            <p className="title">ID</p>
            <p className="subtitle">{user.id}</p>
          </div>
          <div>
            <p className="title">Email/username</p>
            <p className="subtitle">{user.email}</p>
          </div>
          <div>
            <p className="title">Role</p>
            <p className="subtitle">{user.role}</p>
          </div>
          <div>
            <p className="title">User object</p>
            <pre className="subtitle">{JSON.stringify(user, null, 2)}</pre>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import "../css/style.css";

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem("user"));
//         const userId = user._id;

//         console.log(userId);
//         const response = await axios.get(
//           `http://localhost:7000/admin/user/${userId}`
//         );
//         const userData = response.data;
//         setUser(userData);
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   return (
//     <>
//       <h1>
//         <span className="goback" onClick={() => window.history.back()}>
//           ←
//         </span>
//         Profile
//       </h1>

//       {user && (
//         <div className="profile">
//           <div>
//             <p className="title">ID</p>
//             <p className="subtitle">{user.id}</p>
//           </div>
//           <div>
//             <p className="title">Email/username</p>
//             <p className="subtitle">{user.email}</p>
//           </div>
//           <div>
//             <p className="title">Role</p>
//             <p className="subtitle">{user.role}</p>
//           </div>
//           <div>
//             <p className="title">User object</p>
//             <pre className="subtitle">{JSON.stringify(user, null, 2)}</pre>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProfilePage;
