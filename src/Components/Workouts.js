import React,{useState} from 'react';
import Activity from './Activity';
import {useSelector} from "react-redux";
import { AddActivity } from './AddActivity';

const  Workouts = () => {
    const allActivities = useSelector((state) => state.activities);
    const [add, setAdd] = useState(false);
   
    return (
        <div className="workouts-wrapper">
            <h1> My Workouts </h1>
            {add && <AddActivity/>}
            <button onClick={() => setAdd(!add)}>Add Activity</button>
            {allActivities.map(activity=> (
                 <Activity key={activity.id} id={activity.id} name={activity.name} duration={activity.duration}/>
             ))}
        </div>
    )
}

export default Workouts;
