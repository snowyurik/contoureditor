// namespace contoureditor {
import React, { Component } from "react";
import { BaseToolSidebar } from "./BaseToolSidebar";

    export class MoveToolSidebar extends BaseToolSidebar{
        public render() {
            return (
                <div className={"tool-sidebar tool-sidebar__create " + ( this.props.isActive ? 'tool-sidebar__active' : '')}>
                    <h3>Move Tool</h3>
                    <p>
                    Drag and drop contour
                    </p>
                </div>
            );
        }
    }
// }