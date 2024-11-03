import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Exercise = () => {

    // access data from our global redux store 
    // useSelector lets us access our state by selecting which we want to access. In this cas, we only have a exerciseLog state and we select it by passing a function (state) => state.THE_STATE_YOU_WANT_ACCESS_TO 
    // The state you have access to will be in the reducers section of your store.js
    // on the left hand side const { ... }, the data inside {} is the specific property you want to access. For here, you are referring to the properties you've set up inside initialState  inside of your slice file so you can access either exerciseLog (THE PROPERTY) or totalSize.
    const { exerciseLog } = useSelector((state) => state.Exercises)

  return (
    <Container>
        <Row className='p-3'>
            <h1>Exercises Logged</h1>
            <ul>
                {exerciseLog.map((exercise, index) => (
                    <li key={index}>{exercise}</li>
                ))}
            </ul>
        </Row>
    </Container>
  )
}

export default Exercise



// import React from 'react';
// import { Container, Row } from 'react-bootstrap';
// import { useSelector } from 'react-redux';

// const Exercise = () => {
//     // Access data from the global Redux store
//     const exerciseLog = useSelector((state) => state.exercises.exerciseLog);

//     return (
//         <Container>
//             <Row className='p-3'>
//                 <h1>Exercises Logged</h1>
//                 <ul>
//                     {exerciseLog.map((exercise, index) => (
//                         <li key={index}>
//                             {exercise.type} - {exercise.duration} mins - {exercise.calories} cal
//                         </li>
//                     ))}
//                 </ul>
//             </Row>
//         </Container>
//     );
// };

// export default Exercise;
