import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import LayoutWrapper from "./wrappers/layoutWrapper";
import Home from "./pages/Home";
// import Contact from "./pages/contact";
import { Auth } from "./pages/Auth";
import Task from "./pages/Task";
//import Faq from "./pages/faq";
import Contact from "./pages/contact"
import Profile from "./pages/Profile"
//import HelpWrapper from "./wrappers/helpWrapper";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutWrapper />}>
      <Route path="/" element={<Auth> <Home /></Auth>} />
      <Route path='/contact' element={<Auth> <Contact/></Auth>}/>
      <Route path='/task' element={<Auth><Task/></Auth>}/>
      <Route path='/profile' element={<Auth><Profile/></Auth>}/>
    </Route>
  )
);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
