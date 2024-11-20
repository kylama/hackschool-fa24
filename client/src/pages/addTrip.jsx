import styles from "../styles/TripForm.module.css";
import { useState } from 'react';

const AddTrip = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [entry, setEntry] = useState('');

  return (
    <div className={styles.container}>
      <h2>Add a Trip</h2>
      <form className={styles.tripForm}>
            <label for="destination">Destination:</label>
            <input type="text" id="destination" name="destination" onChange={(e) =>
            setDestination(e.target.value)} required/>

            <label for="startDate">Start Date:</label>
            <input type="date" id="startDate" name="startDate" onChange={(e) =>
            setStartDate(e.target.value)} required/>

            <label for="endDate">End Date:</label>
            <input type="date" id="endDate" name="endDate" onChange={(e) =>
            setEndDate(e.target.value)} required/>

            <label for="entry">Journal Entry:</label>
            <textarea class="entry" name="entry" onChange={(e) =>
            setEntry(e.target.value)} required></textarea>

            <button type="submit">Add Trip</button>
        </form>
    </div>
  )
};

export default AddTrip;
