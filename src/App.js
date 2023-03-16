import { Routes, Route, } from "react-router-dom";

import View1 from './view1';
import View2 from './view2';
import View3 from './view3';
import View4 from './view4';
import View5 from './view5';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<View1/>} />
            <Route path="/View2/" element={<View2/>} />
            <Route path="/View3/" element={<View3/>} />
            <Route path="/View4/" element={<View4/>} />
            <Route path="/View5/" element={<View5/>} />
            <Route path="*" element={<p>Erreur</p>} />
        </Routes>
    );
}

