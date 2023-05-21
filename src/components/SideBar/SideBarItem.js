export default function SideBarItem({title, path, icon}) {
    //function here


    return (
        <li class="nav-item">
            <a class="nav-link" href={path}>
                <i class={icon}></i>
                <span>{title}</span>
            </a>
        </li>
    );
}