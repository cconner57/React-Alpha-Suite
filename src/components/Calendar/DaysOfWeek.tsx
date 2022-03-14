import { DaysOfWeekProps } from 'interfaces';

const DaysOfWeek = ({ calendarView, date }: DaysOfWeekProps) => {
	let daysOfWeek = [
		{ long: 'Sunday', short: 'Sun' },
		{ long: 'Monday', short: 'Mon' },
		{ long: 'Tuesday', short: 'Tue' },
		{ long: 'Wednesday', short: 'Wed' },
		{ long: 'Thursday', short: 'Thu' },
		{ long: 'Friday', short: 'Fri' },
		{ long: 'Saturday', short: 'Sat' },
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
					<p key={index} className="DaysOfWeek">
						{day.short}
					</p>
				));
			case 'Day':
				return (
					<p
						style={{
							fontSize: '13px',
							textTransform: 'uppercase',
							minWidth: '100%',
							color: '#637085',
							textAlign: 'center',
							lineHeight: '18px',
						}}>
						{daysOfWeek[date.getDay()].long}
					</p>
				);
			default:
				throw new Error('Unknown view');
		}
	};

	return (
		<div className="DaysOfWeekContainer">{renderWeekView(calendarView)}</div>
	);
};

export default DaysOfWeek;
