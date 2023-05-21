import Employees from "./Content/Employees";
import Menu from "./Content/Menu";
import TopBar from "./TopBar/TopBar";

export default function MainContent() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <TopBar />
                <Menu />
                <Employees />
            </div>
        </div>
    )
}