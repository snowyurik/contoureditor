import React, { Component } from "react";
import { render } from "react-dom";
import { ToolbarButton } from "./ToolbarButton";


export interface ToolbarProps {
    tool: string;
    setTool: (tool:string) => void;
}

export class Toolbar extends React.Component<ToolbarProps,{}> {

    public render() {
        return (
            <div id="toolbar">
                <ToolbarButton label="Undo" icon="fa-rotate-left" />
                <ToolbarButton label="Redo" icon="fa-rotate-right" />
                <ToolbarButton label="Select" icon="fa-arrow-pointer" name="select" currentTool={this.props.tool} setTool={this.props.setTool}/>
                <ToolbarButton label="Move" icon="fa-up-down-left-right" name="move" currentTool={this.props.tool} setTool={this.props.setTool}/>
                <ToolbarButton label="New Contour" icon="fa-plus"  name="create" currentTool={this.props.tool} setTool={this.props.setTool}/>
                <ToolbarButton label="Show Labels" icon="fa-eye" />

            </div>
        );
    }
}
