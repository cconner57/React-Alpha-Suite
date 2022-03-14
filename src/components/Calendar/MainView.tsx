import { MainViewProps } from 'interfaces';

const MainView = ({
	selectedMonth,
	selectedYear,
	date,
	calendarView,
}: MainViewProps) => {
	let daysOfMonth: any = [];
	let firstDayofMonth = new Date(selectedYear, selectedMonth, 1);

	const fillEmpyDays = (firstDayofMonth: Date) => {
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
		let daysInMonth = fillEmpyDays(firstDayofMonth);
		daysInMonth.push(...days);

		for (let i = daysInMonth.length; i < 35; i++) {
			daysInMonth.push('');
		}

		return daysInMonth;
	};

	const renderCalendarView = (view: string) => {
		switch (view) {
			case 'Month':
				return (
					<div className="DaysContainer">
						{getDaysInMonth(selectedMonth, selectedYear).map(
							(day: string, index: number) => (
								<div className="DaysItem" key={index}>
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
				return <></>;
			case 'Day':
				return <></>;
			default:
				throw new Error('Unknown view');
		}
	};

	return <>{renderCalendarView(calendarView)}</>;
};

export default MainView;
