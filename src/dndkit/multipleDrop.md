---
title: 多个容器拖拽
order: 1
nav:
  title: demos
  path: /demos
group:
  path: /demos/dnd
  title: dnd-kit的使用
  order: 0
---

# `useDroppable` & `Draggable` & `useDndMonitor`使用

### useDndMonitor 可以在组件内部监听拖拽事件

https://docs.dndkit.com/api-documentation/context-provider/use-dnd-monitor

### {...listeners} {...attributes} 可以用来控制拖拽元素的拖拽句柄

<Alert type="info">
下面是一个稍微复杂一点的示例，它包含多个 Droppable 容器:
</Alert>

<code src="../demo/dnd/multipleDrop/index.tsx">
