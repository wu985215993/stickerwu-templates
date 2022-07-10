import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Tag } from 'antd';
import styles from './index.less';
export default function UserComponent({ id, name }) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: id });
  console.log(
    '%c [ isDragging ]-7',
    'font-size:13px; background:pink; color:#bf2c9f;',
    isDragging,
  );
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };
  return (
    <div
      className={styles.item}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {' '}
      <Tag color="volcano">{name}</Tag>
    </div>
  );
}
