import AccountItem from "./AccountItem";

export default function Account() {
    return (
        <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Anh Nguyen</span>
                <img class="img-profile rounded-circle"
                    src="./img/undraw_profile.svg" />
            </a>
            {/* Dropdown - User Information  */}
            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown">
                <AccountItem 
                    icon="fa-user"
                    title="Profile" />
                <AccountItem
                    icon="fa-cogs"
                    title="Settings" />
                <AccountItem
                    icon="fa-list"
                    title="Activity Log" />
                <AccountItem
                    icon="fa-sign-out-alt fa-sm"
                    title="Logout" />
            </div>
        </li>
    )
}