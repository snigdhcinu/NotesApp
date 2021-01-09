import React from 'react'


function Note(props){
	return <div className='note'>
		<h1>{props.title}</h1>
		<p>{props.content}</p>

		<p className='date-created'>{props.date}</p>
	</div>
}

export default Note