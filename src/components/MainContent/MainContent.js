import Employees from "./Content/Employees";
import Menu from "./Content/Menu";
import TopBar from "./TopBar/TopBar";
import { Routes, Route, Link } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

export default function MainContent() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <TopBar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/menu" element={<Menu />}/>
                        <Route path="/employee" element={<Employees />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}