import Employees from "./Content/Employees";
import Menu from "./Content/Menu";
import Orders from "./Content/Orders";
import TopBar from "./TopBar/TopBar";
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

export default function MainContent() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/menu" element={<Menu />}/>
                        <Route path="/employee" element={<Employees />}/>
                        <Route path="/order" element={<Orders />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}