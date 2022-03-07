import { NavLink } from 'react-router-dom';

const NavBar = () => {
	const navItems = [
		{ route: '/dashboard', img: 'layout', title: 'Dashboard' },
		{ route: '/ecommerce', img: 'purchases', title: 'E-Commerce' },
		{ route: '/calendar', img: 'calendar', title: 'Calendar' },
		{ route: '/mail', img: 'mail', title: 'Mail' },
		{ route: '/chat', img: 'chat', title: 'Chat' },
		{ route: '/tasks', img: 'checked', title: 'Tasks' },
		{ route: '/projects', img: 'block', title: 'Projects' },
		{ route: '/files', img: 'folder', title: 'File Manager' },
		{ route: '/notes', img: 'notes', title: 'Notes' },
		{ route: '/contacts', img: 'user', title: 'Contacts' },
	];
	return (
		<nav className="NavContainer">
			{navItems.map((item, i) => (
				<NavLink
					key={i}
					to={item.route}
					className={({ isActive }) =>
						isActive ? 'NavItem active' : 'NavItem'
					}>
					<img
						src={process.env.PUBLIC_URL + `/assets/icons/${item.img}.png`}
						alt={item.img}
					/>
					<p>{item.title}</p>
				</NavLink>
			))}
		</nav>
	);
};

export default NavBar;
