import React from "react";
import "./assets/styles/App.css";
import Navigation from "./components/navigationBar/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleSlider from "./pages/task1/simpleSlider";
import LoadingIcon from "./pages/task1/loadingIcon";
import ProgressBar from "./pages/task1/pogressBar";
import ApiData from "./pages/task2/api";
import SimpleBarChar from "./pages/task3/simpleBarChar";
import MapInterface from "./pages/task3/mapInterface";
import Welcome from "./pages/welcome";

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


const App = ()=>{
    return(
    <BrowserRouter>
        <Navigation />
        <Routes>
        <Route path = "/" element={<Welcome/>} />
            <Route path = "/task1/simpleSlider" element={<SimpleSlider/>} />
            <Route path = "/task1/loadingIcon" element={<LoadingIcon/>} />
            <Route path = "/task1/progressBar" element={<ProgressBar/>} />
            <Route path = "/task2/api" element={<ApiData/>} />
            <Route path = "/task3/simpleBarChart" element={<SimpleBarChar/>} />
            <Route path = "/task3/mapInterface" element={<MapInterface/>} />
            <Route
                path="*"
                element={
                    <main className="errorPage">
                    <p>Error!! <br/>
                    Status Code: 404<br/>
                    page not found!!
                    </p>
                    </main>
                }
            />
        </Routes>
        </BrowserRouter>
    );
}
export default App;