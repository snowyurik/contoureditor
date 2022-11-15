import React, { Component } from "react";
import { CreateToolSidebar } from "./CreateToolSidebar";
import { MoveToolSidebar } from "./MoveToolSidebar";
import { SelectToolSidebar } from "./SelectToolSidebar";
import { ContourList } from "./ContourList";

interface SidebarProps {
    tool: string,
    contours: any,
    selectContour: (index:number) => void,
    selectedContour: number,
}

export class Sidebar extends React.Component<SidebarProps,{}> {

    public render() {
        return (
            <div id="sidebar">
                <CreateToolSidebar isActive={this.props.tool == "create"}/>
                <SelectToolSidebar isActive={this.props.tool == "select"}/>
                <MoveToolSidebar isActive={this.props.tool == "move"}/>
                <ContourList
                    contours={this.props.contours}
                    selectContour={this.props.selectContour}
                    selectedContour={this.props.selectedContour}
                    />
            </div>
        );
    }
}
