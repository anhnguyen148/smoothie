import SearchBar from "./SearchBar";
import SearchXS from "./SearchXS";
import Notifications from "./Notifications";
import Messages from "./Messages";
import Account from "./Account";

export default function TopBar() {
    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                <i class="fa fa-bars"></i>
            </button>
            <SearchBar />
            {/* Top Nav Bar */}
            <ul class="navbar-nav ml-auto">
                <SearchXS />
                <Notifications />
                <Messages />
                <div class="topbar-divider d-none d-sm-block"></div>
                <Account />
            </ul>
            
        </nav>
    )
}