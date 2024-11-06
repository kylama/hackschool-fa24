import styles from "../styles/TripForm.module.css";

const AddTrip = () => {
  return (
    <div className={styles.container}>
      <h2>Add a Trip</h2>
      <form className={styles.tripForm}>
<<<<<<< HEAD
            <label for="destination">Destination:</label>
            <input type="text" id="destination" name="destination" required/>
            <label for="startDate">Start Date:</label>
            <input type="date" id="startDate" name="startDate" required/>
            <label for="endDate">End Date:</label>
            <input type="date" id="endDate" name="endDate" required/>
            <label for="entry">Journal Entry:</label>
            <textarea class="entry" name="entry" required></textarea>
            <button type="submit">Add Trip</button>
        </form>
=======
        <label htmlFor="destination">Destination:</label>
        <input type="text" name="destination" required />

        <label htmlFor="startDate">Start Date:</label>
        <input type="date" name="startDate" required />

        <label htmlFor="endDate">End Date:</label>
        <input type="date" name="endDate" required />

        <label htmlFor="entry">Journal Entry:</label>
        <textarea name="entry" required></textarea>

        <button type="submit">Add Trip</button>
      </form>
>>>>>>> upstream/part4
    </div>
  )
};

export default AddTrip;
