export interface MainViewProps {
	selectedMonth: number;
	selectedYear: number;
	date: Date;
	calendarView: string;
}

export interface HeaderProps {
	selectedMonth: number;
	setSelectedMonth: Function;
	selectedYear: number;
	setSelectedYear: Function;
	calendarView: string;
	setCalendarView: Function;
}

export interface DaysOfWeekProps {
	calendarView: string;
	date: Date;
}
