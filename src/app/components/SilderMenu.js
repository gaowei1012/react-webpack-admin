// 侧边栏联动菜单
import React, { useState } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom;';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// left menus
const renderMenuItem = item => (
  <Menu.Item key={item.key}>
    <Link to={(item.route || item.key) + (item.query || '')}>
      {item.icon && <Icon type={item.icon} />}
      <span className="nav-text">{item.title}</span>
    </Link>
  </Menu.Item>
);

// right context
const renderSubsMenus = item => (
  <Menu.SubMenu key={item.key}>
    <Link to={(item.route || item.key) + (item.query || '')}>
      {item.icon && <Icon type={item.icon} />}
      <span className="nav-text"></span>
    </Link>
  </Menu.SubMenu>
);

export default ({ menus, ...props }) => {
  const [dargItems, setDaregItem] = useState(menus);
  // 计算拖拽方法
  const reoder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  // 拖拽方法
  const onDragEnd = result => {
    // 判断是否到达终点
    if (!result.destination) return;
    const _items = reoder(dargItems, result.source.index, result.destination.index);

    setDaregItem(_items);
  };

  return (
    // 拖拽
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable draggableId="droppable">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps}>
            {dargItems.map((item, index) => (
              <Draggable key={item.key} index={index} draggableId={item.key}>
                {(provided, snapshot) => (
                  <div>
                    <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                      <Menu {...props}>{item.subs ? renderSubsMenus(item) : renderMenuItem(item)}</Menu>
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
