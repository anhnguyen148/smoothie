export default function SideBarItem() {
    const menuItem = [
        {
            path: "/order",
            icon: "fa-solid fa-cart-shopping",
            title: "Orders"
        },
        {
            path: "/menu",
            icon: "fa-solid fa-clipboard",
            title: "Drinks Menu"
        },
        {
            path: "/employee",
            icon: "fa-solid fa-user",
            title: "Employees"
        }
    ];
    return (
        <>
            {menuItem.map((item,index) => {
                return(
                    <li key={index} className="nav-item">
                        <a className="nav-link" href={item["path"]}>
                            <i className={item["icon"]}></i>
                            <span>{item["title"]}</span>
                        </a>
                    </li>
                )
            })}
        </>
    );
}