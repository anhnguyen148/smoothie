import NotifItem from "./NotifItem";

export default function Notifications() {
    return (
        <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"></i>
                 {/* Counter - Alerts  */}
                <span class="badge badge-danger badge-counter">3+</span>
            </a>
             {/* Dropdown - Alerts  */}
            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                    Alerts Center
                </h6>
                <NotifItem 
                    type="primary"
                    icon="fa-file-alt"
                    date="December 12, 2019"
                    alert="A new monthly report is ready to download!" />
                <NotifItem 
                    type="success"
                    icon="fa-donate"
                    date="December 7, 2019"
                    alert="$290.29 has been deposited into your account!" />
                <NotifItem 
                    type="warning"
                    icon="fa-exclamation-triangle"
                    date="December 2, 2019"
                    alert="Spending Alert: We've noticed unusually high spending for your account." />
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
            </div>
        </li>
    )
}