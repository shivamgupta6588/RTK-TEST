import React from 'react';
import styled from 'styled-components';
import { useDeleteNotesMutation } from '../Slice/api';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  background-color: var(--background-color);
  color: var(--text-color);
  display: flex; /* Add flex display */
  flex-direction: column; /* Align children vertically */
`;

const NoteText = styled.p`
  font-size: 16px;
  flex-grow: 1; /* Take remaining space */
`;

const DeleteButton = styled.button`
  background-color: var(--delete-button-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const NoteCard = ({ note }) => {
  const [deleteNotes, {isLoading}] = useDeleteNotesMutation();

  const handleDelete = async (id) => {
    try {
      await deleteNotes(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardContainer>
      <NoteText>{note.text}</NoteText>
      <DeleteButton disabled= {isLoading} onClick={() => handleDelete(note.id)}>{isLoading?"Deleting":"Delete"}</DeleteButton>
    </CardContainer>
  );
};

export default NoteCard;
