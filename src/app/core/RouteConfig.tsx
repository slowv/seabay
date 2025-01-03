import {createBrowserRouter, RouteObject} from "react-router-dom";
import {MasterLayout} from "../component/layout/MasterLayout.tsx";
import {HomePage} from "../page/home/HomePage.tsx";

// Định nghĩa kiểu cấu hình cho future flags
interface RouterConfig {
  future?: {
    v7_startTransition?: boolean;
    v7_relativeSplatPath?: boolean;
  };
}


const routes: RouteObject[] = [
  // USER ROUTE
  {
    element: <MasterLayout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      }
    ]
  },
]

export const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  } as RouterConfig['future'],
})