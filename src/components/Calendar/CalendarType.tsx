import { CalendarTypeProps } from 'interfaces';

const CalendarType = ({
	selectedMonth,
	selectedYear,
	date,
	calendarView,
}: CalendarTypeProps) => {
	let daysOfMonth: any = [];
	let firstDayofMonth = new Date(selectedYear, selectedMonth, 1);

	const fillEmptyDays = (firstDayofMonth: Date) => {
		let emptyDays = firstDayofMonth.getDay();
		for (let i = 0; i < emptyDays; i++) {
			daysOfMonth.push('');
		}
		return daysOfMonth;
	};

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
		let daysInMonth = fillEmptyDays(firstDayofMonth);
		daysInMonth.push(...days);

		for (let i = daysInMonth.length; i < 35; i++) {
			daysInMonth.push('');
		}

		return daysInMonth;
	};

	const timeArray = [
		'01:00',
		'02:00',
		'03:00',
		'04:00',
		'05:00',
		'06:00',
		'07:00',
		'08:00',
		'09:00',
		'10:00',
		'11:00',
		'12:00',
		'13:00',
		'14:00',
		'15:00',
		'16:00',
		'17:00',
		'18:00',
		'19:00',
		'20:00',
		'21:00',
		'22:00',
		'23:00',
		'24:00',
	];

	const renderCalendarView = (view: string) => {
		switch (view) {
			case 'Month':
				return (
					<div className="MonthContainer">
						{getDaysInMonth(selectedMonth, selectedYear).map(
							(day: string, index: number) => (
								<div className="MonthItem" key={index}>
									<p
										className={
											date.getMonth() === selectedMonth &&
											date.getDate() === index - 1
												? `DaysNumberToday`
												: `DaysNumber`
										}>
										{day}
									</p>
								</div>
							)
						)}
					</div>
				);
			case 'Week':
				return (
					<div className="WeekContainer">
						<div className="TimeSlotContainer">
							{timeArray.map((time, index) => (
								<p className="TimeSlot" key={index}>
									{time}
								</p>
							))}
						</div>
						<div className="Week">
							{[...Array(140)].map((t, index) => (
								<div key={index} className="WeekItem">
								</div>
							))}
						</div>
					</div>
				);
			case 'Day':
				return (
					<div className="DayContainer">
						<p>hello day</p>
					</div>
				);
			default:
				throw new Error('Unknown view');
		}
	};

	return <>{renderCalendarView(calendarView)}</>;
};

export default CalendarType;
