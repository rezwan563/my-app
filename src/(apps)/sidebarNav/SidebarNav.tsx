import './SidebarNav.css'

const sidebarItems = [
    {
      id: 1,
      label: "Inventory",
      icon: "dashboard",
      route: "/inventory",
    },
    {
      id: 2,
      label: "Products",
      icon: "box",
      route: "/inventory/products",
    },
    {
      id: 3,
      label: "Categories",
      icon: "folder",
      route: "/inventory/categories",
    },
    {
      id: 4,
      label: "Orders",
      icon: "shopping-cart",
      route: "/inventory/orders",
    },
    {
      id: 5,
      label: "Customers",
      icon: "users",
      route: "/inventory/customers",
    },
    // Add more sidebar items as needed
  ];
  

const SidebarNav = () => {
    return (
        <ul>
            {sidebarItems.map((item) => (
                <li key={item.id}><a href={item.route}>{item.label}</a></li>
            ))}
        </ul>
    );
};

export default SidebarNav;