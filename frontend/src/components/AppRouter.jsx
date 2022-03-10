import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Start from "./pages/Start";
import FormClient from "./pages/FormClient";
import FormList from "./pages/FormList";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/about"
                element={<About/>}
            >
            </Route>
                <Route
                    path="/clients/client"
                    element={<FormClient/>}
                >
                </Route>
                <Route
                    path="/client/:id"
                    element={<FormClient/>}
                >
                </Route>
            <Route
                path="/list"
                element={<FormList/>}
            >
            </Route>
            <Route
                path="/"
                element={<Start/>}
            >
            </Route>
            <Route
                path="/home"
                element={<Start/>}
            >
            </Route>
            <Route
                path="*"
                element={<Start/>}
            >
            </Route>
    </Routes>
    );
};

export default AppRouter;