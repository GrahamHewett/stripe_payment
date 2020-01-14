import React from 'react'
import CarbonDatePicker from 'react-carbon-datepicker'
 
let configTheme = {
	squareEdge: false,
	background: '#fff',
	dateHeaderColor: '#777',
	button: {
		background: '#fff',
		color: '#999',
		hover: {
			background: '#f9f9f9',
			color: '#555',
		}
	},
	input: {
		background: '#f4f4f4',
		color: '#555',
	},
	year: {
		selector: {
			background: '#fff',
			pointerColor: 'rgba(0,0,0,0.03)',
			listItem: {
				background: 'transparent',
				color: '#999',
				hover: {
					background: 'transparent',
					color: '#333',
				},
				active: {
					background: 'transparent',
					color: '#333',
					hover: {
						background: 'transparent',
						color: '#222',
					},
				}
			},
			button: {
				background: '#fff',
				color: '#999',
				hover: {
					background: '#f9f9f9',
					color: '#555',
				}
			},
		},
		button: {
			background: '#fff',
			color: '#555',
			hover: {
				background: '#f9f9f9',
				color: '#222',
			}
		},
	},
	month: {
		button: {
			background: '#fff',
			color: '#555',
			hover: {
				background: '#f9f9f9',
				color: '#222',
			}
		},
		selector: {
			background: 'rgba(255,255,255,0.95)',
			button: {
				background: 'transparent',
				color: '#777',
				hover: {
					background: '#f5f5f5',
					color: '#444',
				},
				active: {
					background: '#c1e2c0',
					color: '#555',
					hover: {
						background: '#b0d8af',
						color: '#444',
					},
				}
			}
		}
	},
	date: {
		background: 'transparent',
		color: '#555',
		hover: {
			background: '#f9f9f9',
			color: '#333',
		},
		active: { 
			background: '#ed1f4f',
			color: '#fff',
			hover: {
				background: '#ed1f4f',
				color: '#fff',
			}
		},
		highlight: {
			background: '#fde1e7',
			color: '#333',
			hover: {
				background: '#fde1e7',
				color: '#333',
			}
		},
		disabled: {
			opacity: 0.4,
			color: '#555',
			background: 'transparent'
		}
	},
	reminder: {
		headerColor: '#666',
		descriptionColor: '#999' 
	}
}

const configObj = {
	alwaysShow:	true,
	showCalendar:	true,
	themePreset: 'dark',
	reminders:	[
		{note:	'I am a reminder', color: 'green', timestamp: 0,}, 
		{note:	'I am a 2nd reminder', color: 'blue', timestamp: 1,}
	],
	theme: configTheme,
}

const handleChange = () => {

}

export default function DatePicker() {
    return (
      <CarbonDatePicker onChange={handleChange} config={configObj}/>
    )
}