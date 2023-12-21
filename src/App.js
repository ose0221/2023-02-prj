import React from "react";
import {
    BrowserRouter as BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Start from "./components/Start";
import Letters2023 from "./components/Letters2023";
import Letters2024 from "./components/Letters2024";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/dukdam2023" element={<Letters2023 />} />
            <Route path="/dukdam2024" element={<Letters2024 />} />
        </Routes>
    );
}

export default App;
