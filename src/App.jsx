// // import './App.css'
// import { useSelector,useDispatch } from 'react-redux'
// import { increment } from './Slice/counterSlice';
// import Testing from './comp/testing';
// function App() {
//   const value=useSelector((state)=>(state.counter.value));
//   const dispatch=useDispatch();

//   return (
//     <>
//       <div>
//         {/* counter from redux
//         {value}
//         <button onClick={()=>dispatch(increment())}>clci</button> */}
//         <Testing/>
//         </div>

//     </>
//   )
// }

// export default App
import './App.css'
import { useEffect, useState } from "react";
import AddNote from "./comp/addNote";
import NoteCard from "./comp/noteCard"; // Import NoteCard component
import { useAddNotesMutation, useGetNotesQuery } from "./Slice/api.js";

const App = () => {
  const { data } = useGetNotesQuery();
  console.log({ data });

  const [notes, setNotes] = useState([]);

  const [addNotesMutation, { data: newData }] = useAddNotesMutation();

  useEffect(() => {
    console.log(newData);
  }, [newData]);

  const addNote = async (input) => {
    try {
      await addNotesMutation({ text: input });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id)); // Filter out the note with the given id
  };

  return (
    <div>
      <h1>My Notes</h1>
      <AddNote onAdd={addNote} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data &&
          [...data]
            .reverse()
            .map((note) => (
              <NoteCard key={note.id} note={note} onDelete={deleteNote} />
            ))}
      </div>
    </div>
  );
};

export default App;
