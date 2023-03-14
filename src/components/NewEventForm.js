import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ addEvent}) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] =useState('England')

    const resetForm = () => {
        setTitle('')
        setDate('')
        setLocation('England')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        
        addEvent(event)
        resetForm()
    }

    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
                <label>
                    <span>Event Title:</span>
                    <input 
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Event Date:</span>
                    <input
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                </label>
                <label>
                    <span>Event location:</span>
                    <select onChange={(e) => setLocation(e.target.value)}>
                    <option value="England">England</option>
                        <option value="Scotland">Scotland</option>
                        <option value="Wales">Wales</option>
                    </select>
                </label>
                <button>Submit</button>
                <p>title - {title}, date - {date}</p>
                <p onClick={resetForm}>reset the form</p>
        </form>
    )
}