import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export const Droppable = props => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
    padding: '20px',
    border: '1px solid black',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};
