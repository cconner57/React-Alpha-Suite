import React from 'react';

const CalendarItems = () => {
	return (
		<div className="CalendarItems">
			<p className="CalendarHeader">Calendars</p>
			<div className="CalendarSubContainer">
				<div className="CalendarFilterItem">
					<div
						className="dot"
						style={{
							backgroundColor: '#FF6640',
						}}
					/>
					<p>Important</p>
				</div>
				<div className="CalendarFilterItem">
					<div
						className="dot"
						style={{
							backgroundColor: '#FF9640',
						}}
					/>
					<p>Meeting</p>
				</div>
				<div className="CalendarFilterItem">
					<div
						className="dot"
						style={{
							backgroundColor: '#31D482',
						}}
					/>
					<p>Event</p>
				</div>
				<div className="CalendarFilterItem">
					<div
						className="dot"
						style={{
							backgroundColor: '#826AF9',
						}}
					/>
					<p>Work</p>
				</div>
				<div className="CalendarFilterItem">
					<div
						className="dot"
						style={{
							backgroundColor: '#C6C8CC',
						}}
					/>
					<p>Other</p>
				</div>
			</div>
			<p className="CalendarAddItem">✚</p>
		</div>
	);
};

export default CalendarItems;
