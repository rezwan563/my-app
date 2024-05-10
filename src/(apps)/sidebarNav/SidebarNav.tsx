import "./SidebarNav.css";

const sidebarItems = [
  {
    id: 1,
    label: "Inventory",
    icon: "dashboard",
    route: "/inventory",
    subroute: [
      {
        id: 11,
        label: "Products",
        icon: "box",
        route: "/inventory/products",
      },
      {
        id: 12,
        label: "Categories",
        icon: "folder",
        route: "/inventory/categories",
      },
      {
        id: 13,
        label: "Orders",
        icon: "shopping-cart",
        route: "/inventory/orders",
      },
      {
        id: 14,
        label: "Customers",
        icon: "users",
        route: "/inventory/customers",
      },
    ],
  },

  // Add more sidebar items as needed
];

const SidebarNav = () => {
  return (
    <ul>
      {sidebarItems.map((item, index) => (
        <li key={item.id}>
          <a href={item.route}>{item.label}</a>

          {sidebarItems[index].subroute.length > 1 ? (
            <ul>
              {sidebarItems[index].subroute.map((sub) => (
                <li key={sub.id} className="sub">
                  <a href={sub.route}>{sub.label}</a>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  );
};

export default SidebarNav;
