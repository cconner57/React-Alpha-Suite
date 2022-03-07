import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../screens/Dashboard';
import Calendar from '../screens/Calendar';
import Chat from '../screens/Chat';
import Timeline from '../screens/Timeline';
import TaskBoard from '../screens/TaskBoard';
import ProjectManagement from '../screens/ProjectManagement';
import Profile from '../screens/Profile';
import Notes from '../screens/Notes';
import Mail from '../screens/Mail';
import FileManager from '../screens/FileManager';
import ECommerce from '../screens/ECommerce';
import Contacts from '../screens/Contacts';
import Login from '../screens/Login';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="dashboard" element={<Dashboard />} />
			<Route path="calendar" element={<Calendar />} />
			<Route path="chat" element={<Chat />} />
			<Route path="contacts" element={<Contacts />} />
			<Route path="ecommerce" element={<ECommerce />} />
			<Route path="files" element={<FileManager />} />
			<Route path="mail" element={<Mail />} />
			<Route path="notes" element={<Notes />} />
			<Route path="profile" element={<Profile />} />
			<Route path="projects" element={<ProjectManagement />} />
			<Route path="tasks" element={<TaskBoard />} />
			<Route path="timeline" element={<Timeline />} />
		</Routes>
	);
};

export default PublicRoutes;
