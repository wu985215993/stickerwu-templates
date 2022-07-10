import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Space } from 'antd';
import { Droppable } from './Droppable';
import { Draggable } from './Draggable';

export default () => {
  // 设置可拖放容器的id
  const containers = ['A', 'B', 'C'];

  const [parent, setParent] = useState(null);

  const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;
  function handleDragEnd(event) {
    console.log(
      '%c [ handleDragEnd ]-17',
      'font-size:13px; background:pink; color:#bf2c9f;',
      event,
    );
    const { over } = event;
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
  function handleDragStart(event) {
    console.log(
      '%c [ handleDragStart ]-39',
      'font-size:13px; background:pink; color:#bf2c9f;',
      event,
    );
  }
  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        {parent === null ? draggableMarkup : null}
        {containers.map(id => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : 'Drop here'}
          </Droppable>
        ))}
      </Space>
    </DndContext>
  );
};
