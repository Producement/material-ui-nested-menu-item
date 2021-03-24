import React, { useState, useRef } from 'react';
import { Menu, MenuItem, Typography } from '@material-ui/core';
import NestedMenuItem from '..';
export default {
    title: 'Nested Menu Item'
};
export const NestedMenu = () => {
    const [menuPosition, setMenuPosition] = useState({ top: 10, left: 10 });
    const menuItemRef = useRef(null);
    const handleRightClick = (event) => {
        if (menuPosition) {
            return;
        }
        event.preventDefault();
        setMenuPosition({
            top: event.pageY,
            left: event.pageX
        });
    };
    const handleItemClick = (event) => {
        setMenuPosition(null);
    };
    return (React.createElement("div", { onContextMenu: handleRightClick },
        React.createElement(Typography, null, "Right click to open menu"),
        React.createElement(Menu, { open: !!menuPosition, onClose: () => setMenuPosition(null), anchorReference: 'anchorPosition', anchorPosition: menuPosition },
            React.createElement(MenuItem, { onClick: handleItemClick }, "Button 1"),
            React.createElement(MenuItem, { onClick: handleItemClick }, "Button 2"),
            React.createElement(NestedMenuItem, { ref: menuItemRef, label: 'Button 3', parentMenuOpen: !!menuPosition, onClick: handleItemClick },
                React.createElement(MenuItem, { onClick: handleItemClick }, "Sub-Button 1"),
                React.createElement(MenuItem, { onClick: handleItemClick }, "Sub-Button 2"),
                React.createElement(NestedMenuItem, { label: 'Sub-Button 3', parentMenuOpen: !!menuPosition, onClick: handleItemClick },
                    React.createElement(MenuItem, { onClick: handleItemClick }, "Sub-Sub-Button 1"),
                    React.createElement(MenuItem, { onClick: handleItemClick }, "Sub-Sub-Button 2"))),
            React.createElement(MenuItem, { onClick: handleItemClick }, "Button 4"))));
};