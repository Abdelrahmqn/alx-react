import React from "react";
import './Notifications.css'
import { getLatestNotification } from "./utils";


export default function Notifications() {
    return (
		<div className='Notifications'>
			<p style={{ display: 'inline', marginRight: '80%' }}>
				Here is the list of notifications
			</p>
			<button
				aria-label='Close'
				onClick={console.log('Close button has been clicked')}
			>
				<img style={{ display: 'inline' }} alt='Close' />
			</button>
			<ul>
				<li type='default' value='New course available'></li>
			</ul>
		</div>
	);

}
