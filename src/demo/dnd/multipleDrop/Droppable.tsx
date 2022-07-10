import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable(props) {
  // isOver 代表在上面 over代表over在自己上的自己的节点数据
  const { isOver, setNodeRef, over } = useDroppable({
    id: props.id,
    data: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
    height: 100,
    border: '1px solid black',
  };
  console.log(
    '%c [ over ]-6',
    'font-size:13px; background:pink; color:#bf2c9f;',
    over,
    isOver,
  );

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
