export default function AccountItem({icon, title}) {
    return (
        <a className="dropdown-item" href="#">
            <i className={`fas ${icon} fa-fw mr-2 text-gray-400`}></i>
            {title}
        </a>
    )
}