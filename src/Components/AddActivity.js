import React,{useState} from 'react'
import {useDispatch} from "react-redux";

export const AddActivity = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({})

    const handleChange = (e) =>{
        e.persist();
        setData(prev => ({...prev, [e.target.name]:[e.target.value]}))
    }

    const addActivity = () =>{
        dispatch({
            type:"CREATE_ACTIVITY",
            payload:{
                name : data.name,
                duration:data.duration
            }
        })
    }

    return (
        <div className="add">
            <div className="input-section">
                <p>Activity:</p>
                <input onChange ={(e)=>handleChange(e)} name={"name"} placeholder={"New Activity"}/>
            </div>
            
            <div className="input-section">
                <p>Duration:</p>
                <input onChange ={(e) => handleChange(e)} name={"duration"} placeholder={"New Activity"}/>
            </div>
            <button onClick={addActivity}>Add Activity</button>
        </div>
    )
}
