import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav>
      <h2>Easy Onboard</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {token ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to={`/${user.role.toLowerCase()}-dashboard`}>
                Dashboard
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <nav>
//       <h2>RBAC</h2>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {token ? (
//           <>
//             <li>
//               <Link to="/profile">Profile</Link>
//             </li>

//               <li>
//                <Link to=`/${user.role.toLowerCase()}-dashboard`>Dashboard</Link>
//              </li>

//             <li>
//               <Link to="/auth/logout">Logout</Link>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link to="/signup">Register</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
