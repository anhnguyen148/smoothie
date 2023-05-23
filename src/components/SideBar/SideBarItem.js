export default function SideBarItem({title, path, icon}) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={path}>
                <i className={icon}></i>
                <span>{title}</span>
            </a>
        </li>
    );
}