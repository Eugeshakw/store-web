import { Routes, Route } from "react-router-dom";
import {Layout} from './Layout/Layout'
import { lazy } from "react";

const HomePage = lazy(() => import('../pages/HomePage'));
const PageFirst = lazy(() => import('../pages/PageFirst'));


const App = () => {
  return (
   <>
   <Routes>
    <Route path='/'  element = {<Layout/>}>
      <Route index element ={<HomePage/>}/>
      <Route path="page" element={<PageFirst/>}/>
    </Route>
   </Routes>
   
   </>
  );
}

export default App;
