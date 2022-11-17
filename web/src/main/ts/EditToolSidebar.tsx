import React, { Component } from "react";
import { BaseToolSidebar } from "./BaseToolSidebar";

export interface EditToolSidebarProps {
    removeSelectedContour: () => void;
    isActive: boolean;
    activeContourTitle: string;
    setActiveContourTitle: (title:string) => void;
}

export class EditToolSidebar extends React.Component<EditToolSidebarProps,{}>{

    public static defaultProps = {
        isActive: false
    }

    public constructor(props) {
         super(props);
    }

    public render() {
        return (
            <div className={"tool-sidebar tool-sidebar__create " + ( this.props.isActive ? 'tool-sidebar__active' : '')}>
                <h3>Edit Tool</h3>
                <p>
                Drag and drop contours and vertexes of selected contour
                </p>
                <div>
                    <h4>With selected contour:</h4>
                    <label>Change title</label>
                    <input type="text"
                        value={this.props.activeContourTitle}
                        onChange={ e=>this.props.setActiveContourTitle( e.target.value ) } />
                    <button onClick={this.props.removeSelectedContour}>Remove Selected Contour</button>
                </div>
            </div>
        );
    }
}
