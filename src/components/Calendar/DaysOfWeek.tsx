import { DaysOfWeekProps } from 'interfaces';

const DaysOfWeek = ({ calendarView, date }: DaysOfWeekProps) => {
	let daysOfWeek = [
		{ long: 'Sunday', short: 'Sun', num: 20 },
		{ long: 'Monday', short: 'Mon', num: 21 },
		{ long: 'Tuesday', short: 'Tue', num: 22 },
		{ long: 'Wednesday', short: 'Wed', num: 23 },
		{ long: 'Thursday', short: 'Thu', num: 24 },
		{ long: 'Friday', short: 'Fri', num: 25 },
		{ long: 'Saturday', short: 'Sat', num: 26 },
	];

	const renderWeekView = (view: string) => {
		switch (view) {
			case 'Month':
				return daysOfWeek.map((day, index) => (
					<p key={index} className="DaysOfWeek">
						{day.long}
					</p>
				));
			case 'Week':
				return daysOfWeek.map((day, index) => (
					<div key={index} className="DaysOfWeek">
						<p className="WeekNames">{day.short}</p>
						<p className="WeekNum">{day.num}</p>
					</div>
				));
			case 'Day':
				return <p className="DayOfWeek">{daysOfWeek[date.getDay()].long}</p>;
			default:
				throw new Error('Unknown view');
		}
	};

	return (
		<div
			className="DaysOfWeekContainer"
			style={calendarView === 'Week' ? { height: '55px' } : {}}>
			{renderWeekView(calendarView)}
		</div>
	);
};

export default DaysOfWeek;
