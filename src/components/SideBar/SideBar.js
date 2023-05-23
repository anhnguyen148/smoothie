import SideBarHead from "./SideBarHead";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <SideBarHead />            
            <hr className="sidebar-divider my-0"/>
            <SideBarItem 
                title="Dashboard"
                path="/dashboard"
                icon="fas fa-fw fa-tachometer-alt" />

            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">
                Management
            </div>            
            <SideBarItem title="Orders"
                path="order"
                icon="fa-solid fa-cart-shopping"/>

            <SideBarItem title="Drinks Menu"
                path="menu"
                icon="fa-solid fa-clipboard" />

            <SideBarItem title="Employees"
                path="employee"
                icon="fa-solid fa-user" />
        </ul>
    );
}