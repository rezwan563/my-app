import "./SidebarNav.css";

const sidebarItems = [
  {
    id: 1,
    label: "Products",
    icon: "box",
    route: "/inventory/products",
  },
  {
    id: 2,
    label: "Categories",
    icon: "folder",
    route: "/inventory/categories",
  },
  {
    id: 3,
    label: "Orders",
    icon: "shopping-cart",
    route: "/inventory/orders",
  },
  {
    id: 4,
    label: "Customers",
    icon: "users",
    route: "/inventory/customers",
  },

  // Add more sidebar items as needed
];

const SidebarNav = () => {
return(
  <div className="">
    <ul className="">
  {
    sidebarItems.map(item => (
      <li className="cursor-pointer py-5 hover:bg-slate-600 px-5">{item.label}</li>
    ))
  }
  </ul>
  </div>
)
};

export default SidebarNav;
