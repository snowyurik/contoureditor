import React, { Component } from "react";
import { render } from "react-dom";
import { ToolbarToolButton } from "./ToolbarToolButton";
import { ToolbarActionButton } from "./ToolbarActionButton";

export interface ToolbarProps {
    tool: string;
    setTool: (tool:string) => void;
    undo: ()=>void;
    redo: ()=>void;
}

export class Toolbar extends React.Component<ToolbarProps,{}> {

    public render() {
        return (
            <div id="toolbar">
                <ToolbarActionButton label="Undo" icon="fa-rotate-left" onClick={this.props.undo}/>
                <ToolbarActionButton label="Redo" icon="fa-rotate-right" onClick={this.props.redo}/>
                <ToolbarToolButton label="Edit" icon="fa-up-down-left-right" name="edit" currentTool={this.props.tool} setTool={this.props.setTool}/>
                <ToolbarToolButton label="New Contour" icon="fa-plus"  name="create" currentTool={this.props.tool} setTool={this.props.setTool}/>
            </div>
        );
    }
//      <!-- ToolbarButton label="Select" icon="fa-arrow-pointer" name="select" currentTool={this.props.tool} setTool={this.props.setTool}/ -->
}
