import React from 'react'
import Note from './Notes.jsx'
import notes from '../notes.js'

function Render(){

		return (
		notes.map((note)=>{
			return <Note title={note.title} content={note.content} key={note.key} />
		})
		);

	}

export default Render;