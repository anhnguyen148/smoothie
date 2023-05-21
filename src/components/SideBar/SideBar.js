import SideBarHead from "./SideBarHead";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <SideBarHead />            
            <hr class="sidebar-divider my-0"/>
            <SideBarItem 
                title="Dashboard"
                path="/dashboard"
                icon="fas fa-fw fa-tachometer-alt" />

            <hr class="sidebar-divider"/>
            <div class="sidebar-heading">
                Management
            </div>            
            <SideBarItem title="Orders"
                path="order"
                icon="fa-solid fa-cart-shopping"/>

            <SideBarItem title="Drinks Menu"
                path="menu"
                icon="fa-solid fa-clipboard" />

            <SideBarItem title="Employees"
                path="employees"
                icon="fa-solid fa-user" />
        </ul>
    );
}