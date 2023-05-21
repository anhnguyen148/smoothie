export default function NotifItem({type, icon, date, alert}) {
    return (
        <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="mr-3">
                <div class={`icon-circle bg-${type}`}>
                    <i class={`fas ${icon} text-white`}></i>
                </div>
            </div>
            <div>
                <div class="small text-gray-500">{date}</div>
                <span class="font-weight-bold">{alert}</span>
            </div>
        </a>
    )
}