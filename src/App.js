import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm';



function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] =useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return[...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events"

  return (
    <div className="App">
      {/* the below text is the prop */}
      <Title title="Events in Your Area" subtitle={subtitle}/>
      {/* <Title title="another title" subtitle="another subtitle"/> */}
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code MONEYS at the checkout.</p>
      </Modal> */}

      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
        <NewEventForm addEvent={addEvent} />        
      </Modal>}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>  

    </div>
  );
}

export default App;

//line 22 - everything needs to have a unique id, in this case id was already set