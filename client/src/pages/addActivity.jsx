import { formatRevalidate } from "next/dist/server/lib/revalidate";
import styles from "../styles/TripForm.module.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AddActivity = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState('');
  const [activity, setActivity] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const router = useRouter();

  const fetchTrips = async () => {
    const response = await TravelApi.getTrip();
    setTrips(response.data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedStartDate = new Date(startDate);
    const formattedEndDate = new Date(endDate);

    await TravelApi.postTrip({
      destination,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      journalEntry: entry
    });

    router.push('/');

  }

  useEffect(() => {
    fetchTrips();
  },[]);

  return (
    <div className={styles.container}>
      <h2>Add an Activity</h2>
      <p>
        What fun things did you do on your trip? Sky-diving? Hiking? Kayaking?
      </p>
      <form className={styles.tripForm} onSubmit = {handleSubmit}>
        <label for="trip">Choose your trip:</label>
          <select name="tripPicker" className="tripPicker" onChange={(e) =>
            setSelectedTrip(e.target.value)} >
            {
              trips.map((trip) => (
                <option key={trip._id} value={trip._id}>
                  {trip.destination} ({formatRevalidate(trip.startDate)} - {formatRevalidate(trip.endDate)})
                </option>
              )
              )
            }
          </select>
          <label for="activity">Activity:</label>
          <input type="text" className="activity" name="activity" onChange={(e) =>
            setActivity(e.target.value)} required/>
          <label for="rating">Rating (1-5):</label>
          <select name="rating" className="rating" onChange={(e) =>
            setRating(e.target.value)} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label for="review">Review:</label>
          <textarea className="review" name="review" onChange={(e) =>
            setReview(e.target.value)} required></textarea>
          <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default AddActivity;
