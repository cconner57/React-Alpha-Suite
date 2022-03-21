import { HeaderProps } from 'interfaces';

const Header = ({
	selectedMonth,
	setSelectedMonth,
	selectedYear,
	setSelectedYear,
	calendarView,
	setCalendarView,
}: HeaderProps) => {
	const findMonth = (month: number): string => {
		switch (month) {
			case 0:
				return 'January';
			case 1:
				return 'February';
			case 2:
				return 'March';
			case 3:
				return 'April';
			case 4:
				return 'May';
			case 5:
				return 'June';
			case 6:
				return 'July';
			case 7:
				return 'August';
			case 8:
				return 'September';
			case 9:
				return 'October';
			case 10:
				return 'November';
			case 11:
				return 'December';
			default:
				throw new Error('Invalid month');
		}
	};

	return (
		<div className="CalendarHeader">
			<div className="HeaderLeft">
				<div className="MonthChange">
					<img
						className="Chevron"
						src={process.env.PUBLIC_URL + '/assets/icons/left-chevron.png'}
						alt="previous month"
						onClick={() =>
							selectedMonth === 0
								? setSelectedMonth(11)
								: setSelectedMonth(selectedMonth - 1)
						}
					/>
					<div className="Divider" style={{ margin: '12px 1px' }} />
					<img
						className="Chevron"
						src={process.env.PUBLIC_URL + '/assets/icons/chevron.png'}
						alt="next month"
						onClick={() =>
							selectedMonth === 11
								? setSelectedMonth(0)
								: setSelectedMonth(selectedMonth + 1)
						}
					/>
				</div>
				<p
					className="Today"
					onClick={() => {
						setSelectedMonth(new Date().getMonth());
						setSelectedYear(new Date().getFullYear());
					}}>
					Today
				</p>
			</div>
			<div className="HeaderMiddle">
				<p className="MonthView">{findMonth(selectedMonth)}</p>
				<p className="YearView">{selectedYear}</p>
			</div>
			<div className="HeaderRight">
				<div
					className={`Focus ${calendarView}`}
					style={
						calendarView === 'Week'
							? { left: '94px' }
							: calendarView === 'Day'
							? { left: '183px' }
							: { left: '0px' }
					}
				/>
				<p
					className="Month"
					style={calendarView !== 'Month' ? { color: '#637085' } : {}}
					onClick={() => setCalendarView('Month')}>
					Month
				</p>
				<div className="Divider" style={{ margin: '12px 0' }} />
				<p
					className="Week"
					style={calendarView !== 'Week' ? { color: '#637085' } : {}}
					onClick={() => setCalendarView('Week')}>
					Week
				</p>
				<div className="Divider" style={{ margin: '12px 0' }} />
				<p
					className="Day"
					style={calendarView !== 'Day' ? { color: '#637085' } : {}}
					onClick={() => setCalendarView('Day')}>
					Day
				</p>
			</div>
		</div>
	);
};

export default Header;
