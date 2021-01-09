import React from 'react'
import Note from './Notes.jsx'
import notes from '../notes.js'




function Render(){

		return (
		notes.map((note)=>{
			let d = new Date();
			let year = d.getFullYear();
			let month = d.getMonth() + 1;
			let day = d.getDate();
			return <Note title={note.title} content={note.content} key={note.key} date={`posted on - ${day}/${month}/${year}`} />
		})
		);

	}

export default Render;