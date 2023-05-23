export default function NotifItem({type, icon, date, alert}) {
    return (
        <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
                <div className={`icon-circle bg-${type}`}>
                    <i className={`fas ${icon} text-white`}></i>
                </div>
            </div>
            <div>
                <div className="small text-gray-500">{date}</div>
                <span className="font-weight-bold">{alert}</span>
            </div>
        </a>
    )
}