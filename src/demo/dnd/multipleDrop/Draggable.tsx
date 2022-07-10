import React from 'react';
import { useDraggable, useDndMonitor } from '@dnd-kit/core';
import { Button } from 'antd';
import { BarsOutlined } from '@ant-design/icons';

export function Draggable(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
    active,
    setActivatorNodeRef,
  } = useDraggable({
    id: props.id,
    data: { id: props.id },
    // disabled: true
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        opacity: isDragging ? 0.5 : 1,
      }
    : undefined;

  // Monitor drag and drop events that happen on the parent `DndContext` provider
  useDndMonitor({
    onDragStart(event) {
      console.log(
        '%c [ useDndMonitor  onDragStart]-18',
        'font-size:13px; background:pink; color:#bf2c9f;',
        event,
      );
    },
    onDragMove(event) {},
    onDragOver(event) {},
    onDragEnd(event) {
      console.log(
        '%c [ useDndMonitor onDragEnd ]-24',
        'font-size:13px; background:pink; color:#bf2c9f;',
        event,
      );
    },
    onDragCancel(event) {},
  });
  return (
    <div ref={setNodeRef} style={style}>
      {/* // <div ref={setNodeRef} style={style} {...listeners} {...attributes}> */}
      {/* 设置可拖拽句柄 */}
      <Button
        type="primary"
        danger={isDragging ? true : false}
        icon={
          <BarsOutlined
            ref={setActivatorNodeRef}
            {...listeners}
            {...attributes}
          />
        }
      >
        {props.children}
      </Button>
    </div>
  );
}
