export default function AccountItem({icon, title}) {
    return (
        <a class="dropdown-item" href="#">
            <i class={`fas ${icon} fa-fw mr-2 text-gray-400`}></i>
            {title}
        </a>
    )
}