import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cursos from "../pages/Cursos";
import EditCurso from "../pages/EditCurso";
import Home from "../pages/Home";
import NewProject from "../pages/NewProject";
import Container from "./Container";


export default props =>
    <Router>
        <div className="c3p0"><Container customClass="min-height">
            <Routes>
            <Route exact path="/" element={<Home />} > </Route>
            <Route path="/cursos" element={<Cursos />} > </Route>
            <Route path="/newproject" element={<NewProject />} > </Route>
            <Route path="/edit/:id" element={<EditCurso />} > </Route>

            </Routes>
        </Container>
        </div>
    </Router>