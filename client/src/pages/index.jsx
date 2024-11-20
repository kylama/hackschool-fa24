import TripCard from "@/components/TripCard";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from 'react';
import TravelApi from "../api";

const Home = () => {
  const [trips, setTrips] = useState([]);
  const [activities, setActivities] = useState([]);

  const fetchTrips = async () => {
    const response = await TravelApi.getTrip();
    setTrips(response.data);
  }

  const fetchActivities = async () => {
    const response = await TravelApi.getActivity();
    setActivity(response.data);
  }

  useEffect(() => {
    fetchTrips();
    fetchActivities();
  },[]);

  return (
    <div className={styles.main}>
      <div className={styles.tripsContainer}>
          <div className={styles.tripBox}>
              <h3>Trips</h3>
              {trips.length > 0 ? (
                trips.map((trip) => (
                  <TripCard
                    key={trip._id}
                    {...trip}
                  />
                ))
              ) : (
                <p>No trips available!</p>
              )}
          </div>
          <div className={styles.tripBox}>
              <h3>Activities</h3>
          </div>
      </div>
    </div>
  );
};

export default Home;
