import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from './Draggable';
import { Droppable } from './Droppable';
import { Space } from 'antd';

/**
 * @name 简单的拖拽程序
 */
export default () => {
  const [isDropped, setIsDropped] = useState(false);

  // 定义可以拖拽的元素
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  /** 处理拖拽完成事件 */
  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Space direction="vertical" size={16}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>{isDropped ? draggableMarkup : 'Drop here'}</Droppable>
      </Space>
    </DndContext>
  );
};
