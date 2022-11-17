import React, { Component } from "react";
import { BaseToolSidebar } from "./BaseToolSidebar";

export class EditToolSidebar extends BaseToolSidebar{
    public render() {
        return (
            <div className={"tool-sidebar tool-sidebar__create " + ( this.props.isActive ? 'tool-sidebar__active' : '')}>
                <h3>Edit Tool</h3>
                <p>
                Drag and drop contours and vertexes of selected contour
                </p>
            </div>
        );
    }
}
