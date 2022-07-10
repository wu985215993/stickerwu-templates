import React, { useState } from 'react';
import UserComponent from './UserComponent';
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import styles from './index.less';

export default () => {
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'Manoj',
    },
    {
      id: '2',
      name: 'John',
    },
    {
      id: '3',
      name: 'Ronaldo',
    },
    {
      id: '4',
      name: 'Harry',
    },
    {
      id: '5',
      name: 'Jamie',
    },
  ]);

  const sensors = [useSensor(PointerSensor)];

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className={styles.layout}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map(item => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {items.map(item => (
            <UserComponent {...item} key={item.id}></UserComponent>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};
