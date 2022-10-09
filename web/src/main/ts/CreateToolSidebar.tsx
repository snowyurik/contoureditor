// namespace contoureditor {
import React, { Component } from "react";
import { BaseToolSidebar } from "./BaseToolSidebar";

    export class CreateToolSidebar extends BaseToolSidebar{
        public render() {
            return (
                <div className={"tool-sidebar tool-sidebar__create " + ( this.props.isActive ? 'tool-sidebar__active' : '')}>
                    <h3>Create Tool</h3>
                    <p>
                    click on canvas to create vertexes of new contour
                    </p>
                    <button>Close Contour</button>
                </div>
            );
        }
    }
// }