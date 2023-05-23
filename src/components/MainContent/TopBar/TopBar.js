import SearchBar from "./SearchBar";
import SearchXS from "./SearchXS";
import Notifications from "./Notifications";
import Messages from "./Messages";
import Account from "./Account";

export default function TopBar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            {/* <SearchBar /> */}
            {/* Top Nav Bar */}
            <ul className="navbar-nav ml-auto">
                {/* <SearchXS /> */}
                <Notifications />
                <Messages />
                <div className="topbar-divider d-none d-sm-block"></div>
                <Account />
            </ul>
            
        </nav>
    )
}