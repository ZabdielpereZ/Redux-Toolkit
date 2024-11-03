
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExercise, deleteExercise } from "./exerciseSlice";

const Exercises = () => {
    
    const exercises = useSelector((state) => state.exercises);
    
    const dispatch = useDispatch();
    const [exercise, setExercise] = useState({
    type: "",
    duration: "",
    calories: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExercise(exercise));
    setExercise({ type: "", duration: "", calories: "" });
  };
  
  return (
    <div>
      {" "}
      <h1>Exercises</h1>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          placeholder="Type"
          value={exercise.type}
          onChange={(e) => setExercise({ ...exercise, type: e.target.value })}
          required
          />{" "}
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={exercise.duration}
          onChange={(e) =>
            setExercise({ ...exercise, duration: e.target.value })
        }
          required
          />{" "}
        <input
          type="number"
          placeholder="Calories burned"
          value={exercise.calories}
          onChange={(e) =>
            setExercise({ ...exercise, calories: e.target.value })
        }
        required
        />{" "}
        <button type="submit">Add Exercise</button>{" "}
      </form>{" "}
      <ul>
        {" "}
        {exercises.map((exercise, index) => (
            <li key={index}>
            {" "}
            {exercise.type} - {exercise.duration} mins - {exercise.calories} cal{" "}
            <button onClick={() => dispatch(deleteExercise(index))}>
              Delete
            </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
};

export default Exercises;



// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addExercise, deleteExercise } from './exerciseSlice';

// const Exercises = () => {
//   const exercises = useSelector((state) => state.exercises);
//   const dispatch = useDispatch();
//   const [exercise, setExercise] = useState({ type: '', duration: '', calories: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addExercise(exercise));
//     setExercise({ type: '', duration: '', calories: '' });
//   };

//   return (
//     <div>
//       <h1>Exercises</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Type"
//           value={exercise.type}
//           onChange={(e) => setExercise({ ...exercise, type: e.target.value })}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Duration (minutes)"
//           value={exercise.duration}
//           onChange={(e) => setExercise({ ...exercise, duration: e.target.value })}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Calories burned"
//           value={exercise.calories}
//           onChange={(e) => setExercise({ ...exercise, calories: e.target.value })}
//           required
//         />
//         <button type="submit">Add Exercise</button>
//       </form>
//       <ul>
//         {exercises.map((exercise, index) => (
//           <li key={index}>
//             {exercise.type} - {exercise.duration} mins - {exercise.calories} cal
//             <button onClick={() => dispatch(deleteExercise(index))}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Exercises;