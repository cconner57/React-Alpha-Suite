import { useState } from 'react';

const Calendar = () => {
	const [calendarView, setCalendarView] = useState('Month');

	let daysOfWeek = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];

	let date = new Date();

	const getDaysInMonth = (month: number, year: number) => {
		let date = new Date(year, month, 1);
		let days = [];
		while (date.getMonth() === month) {
			days.push(
				new Date(date).toLocaleDateString('en-US', {
					day: 'numeric',
				})
			);
			date.setDate(date.getDate() + 1);
		}
		return days;
	};

	const findMonth = (): string => {
		switch (date.getMonth()) {
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
		<div className="CalendarScreen" style={{ marginLeft: '30px' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '30px 0',
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
					✚ Add Event
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
				}}>
				<div
					className="CalendarHeader"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: '25px',
					}}>
					<div className="HeaderLeft" style={{ display: 'flex' }}>
						<div className="MonthChange">
							<img
								className="Chevron"
								src={process.env.PUBLIC_URL + '/assets/icons/left-chevron.png'}
								alt="previous month"
							/>
							<div className="Divider" style={{ margin: '12px 1px' }} />
							<img
								className="Chevron"
								src={process.env.PUBLIC_URL + '/assets/icons/chevron.png'}
								alt="next month"
							/>
						</div>
						<p className="Today">Today</p>
					</div>
					<div
						className="HeaderMiddle"
						style={{ display: 'flex', alignItems: 'baseline' }}>
						<p
							style={{
								color: '#1a1926',
								fontSize: '26px',
								lineHeight: '35px',
							}}>
							{findMonth()}
						</p>
						<p
							style={{
								marginLeft: '6px',
								color: '#637085',
								fontSize: '18px',
								lineHeight: '25px',
							}}>
							{date.getFullYear()}
						</p>
					</div>
					<div
						className="HeaderRight"
						style={{
							display: 'flex',
							alignItems: 'center',
							minWidth: '265px',
							minHeight: '48px',
							backgroundColor: '#f5f7fa',
							borderRadius: '12px',
							position: 'relative',
						}}>
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
				<hr
					style={{
						height: '1px',
						width: '100%',
						border: '1px solid #ebeef2',
					}}
				/>
				<div className="DaysOfWeekContainer">
					{daysOfWeek.map((day, index) => (
						<p key={index} className="DaysOfWeek">
							{day}
						</p>
					))}
				</div>
				<div className="DaysContainer">
					{getDaysInMonth(date.getMonth(), date.getFullYear()).map(
						(day, index) => (
							<div key={index}>
								<p className="DaysItem">{day}</p>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Calendar;
