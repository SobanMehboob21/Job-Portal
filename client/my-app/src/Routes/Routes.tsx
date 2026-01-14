// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { RouteList } from "./RouteList";

// const AppRoutes = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {RouteList.map((route) => {
//           const Component = route.element;
//           return <Route key={route.path} path={route.path} element={<Component />} />;
//         })}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRoutes;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteList } from "./RouteList";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {RouteList.map((route) => {
          const Component = route.element;
          return <Route  key={route.path} path={route.path} element={<Component />}/>;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
