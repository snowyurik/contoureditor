import React, { Component } from "react";
import { CreateToolSidebar } from "./CreateToolSidebar";
import { EditToolSidebar } from "./EditToolSidebar";
import { SelectToolSidebar } from "./SelectToolSidebar";
import { ContourList } from "./ContourList";

interface SidebarProps {
    tool: string;
    contours: any;
    selectContour: (index:number) => void;
    setTool: (tool:string) => void;
    selectedContour: number;
    removeSelectedContour: () => void;
    setActiveContourTitle: (title:string) => void;
    activeContourTitle: string;
}

export class Sidebar extends React.Component<SidebarProps,{}> {

    public render() {
        return (
            <div id="sidebar">
                <CreateToolSidebar isActive={this.props.tool == "create"}/>
                <SelectToolSidebar isActive={this.props.tool == "select"}/>
                <EditToolSidebar isActive={this.props.tool == "edit"}
                    removeSelectedContour={this.props.removeSelectedContour}
                    activeContourTitle={this.props.activeContourTitle}
                    setActiveContourTitle={this.props.setActiveContourTitle}
                />
                <ContourList
                    contours={this.props.contours}
                    selectContour={this.props.selectContour}
                    selectedContour={this.props.selectedContour}
                    setTool={this.props.setTool}
                    />
            </div>
        );
    }
}
