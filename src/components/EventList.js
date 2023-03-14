import styles from './EventList.module.css'

export default function EventList({ events, handleClick }) {
    return (
        events.map((event) => (
        <div className={styles.card} key={event.id}>
            <h2> {event.id} - {event.title}</h2>
            <p>{event.location} - {event.date}</p>
            <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
        ))
    )
}
        
/* <button onClick={() => handleClick(event.id)}>delete event</button> */