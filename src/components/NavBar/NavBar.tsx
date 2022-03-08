import { NavLink, useLocation } from 'react-router-dom';
import CalendarItems from './CalendarItems';

const NavBar = () => {
	let location = useLocation();

	const navItems = [
		{ route: '/dashboard', img: 'layout', title: 'Dashboard' },
		{ route: '/ecommerce', img: 'purchases', title: 'Marketplace' },
		{ route: '/calendar', img: 'calendar', title: 'Calendar' },
		{ route: '/mail', img: 'mail', title: 'Mail' },
		{ route: '/chat', img: 'chat', title: 'Chat' },
		{ route: '/tasks', img: 'checked', title: 'Tasks' },
		{ route: '/projects', img: 'block', title: 'Projects' },
		{ route: '/files', img: 'folder', title: 'Storage' },
		{ route: '/notes', img: 'notes', title: 'Notes' },
		{ route: '/contacts', img: 'user', title: 'Contacts' },
	];
	console.log('id', location.pathname);
	const renderSubNavItems = (id: string) => {
		switch (id) {
			case '/calendar':
				return <CalendarItems />;
			default:
				return null;
		}
	};

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
			{renderSubNavItems(location.pathname)}
		</nav>
	);
};

export default NavBar;
