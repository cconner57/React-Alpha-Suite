import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from '../../routes/Public';
import NavBar from '../NavBar/NavBar';

const Container = () => {
	return (
		<div className="Container">
			<BrowserRouter>
				<NavBar />
				<PublicRoutes />
			</BrowserRouter>
		</div>
	);
};

export default Container;
