import { useState } from 'react';
import Header from '../components/Calendar/Header';
import DaysOfWeek from '../components/Calendar/DaysOfWeek';
import CalendarType from '../components/Calendar/CalendarType';

const Calendar = () => {
	let date = new Date();

	const [calendarView, setCalendarView] = useState('Month');
	const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
	const [selectedYear, setSelectedYear] = useState(date.getFullYear());

	return (
		<div className="CalendarScreen" style={{ marginLeft: '30px' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '10px 0 15px',
				}}>
				<h2
					style={{
						fontSize: '32px',
						lineHeight: '43.65px',
						fontWeight: '700',
					}}>
					Calendar
				</h2>
				<button
					style={{
						display: 'flex',
						alignItems: 'center',
						border: '1px solid #fff',
						backgroundColor: '#2D99FF',
						color: '#fff',
						borderRadius: '14px',
						padding: '14px 24px 14px 22px',
						minHeight: '48px',
						maxHeight: '48px',
						minWidth: '146px',
						maxWidth: '146px',
						boxShadow: '0px 4px 16px rgba(0, 129, 255, 0.18)',
						cursor: 'pointer',
					}}>
					<img
						style={{ fill: 'white', height: '15px', marginRight: '10px' }}
						src={process.env.PUBLIC_URL + '/assets/icons/plus.svg'}
						alt="plus"
					/>{' '}
					Add Event
				</button>
			</div>
			<div
				style={{
					minWidth: '90vw',
					maxWidth: '90vw',
					background: '#fff',
					borderRadius: '16px',
					display: 'flex',
					flexDirection: 'column',
					marginBottom: '1rem',
					overflow: 'hidden',
				}}>
				<Header
					selectedMonth={selectedMonth}
					setSelectedMonth={setSelectedMonth}
					selectedYear={selectedYear}
					setSelectedYear={setSelectedYear}
					calendarView={calendarView}
					setCalendarView={setCalendarView}
				/>
				<hr
					style={{
						height: '1px',
						width: '100%',
						border: '1px solid #ebeef2',
					}}
				/>
				<DaysOfWeek calendarView={calendarView} date={date}/>
				<CalendarType
					selectedMonth={selectedMonth}
					selectedYear={selectedYear}
					date={date}
					calendarView={calendarView}
				/>
			</div>
		</div>
	);
};

export default Calendar;
