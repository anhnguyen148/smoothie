import SideBarHead from "./SideBarHead";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <SideBarHead />            
            <hr className="sidebar-divider my-0"/>
            <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">
                Management
            </div>            
            <SideBarItem  />
        </ul>
    );
}