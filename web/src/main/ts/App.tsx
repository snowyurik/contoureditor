import React, { Component } from "react";
import { render } from "react-dom";
import { Toolbar } from "./Toolbar";
import { Sidebar } from "./Sidebar";
import CanvasWrapper from "./CanvasWrapper";
import { MainMenu } from "./MainMenu";

interface AppState {
    tool: string,
    contours: any,
    selectedContour: number,
}

export class App extends React.Component<{},AppState> {


    public constructor(props) {
        super(props);
        this.state = {
            tool: "create",
            contours: [],
            selectedContour: null,
        };
        this.setTool = this.setTool.bind(this);
        this.setContours = this.setContours.bind(this);
        this.selectContour = this.selectContour.bind(this);
        this.setVertexPos = this.setVertexPos.bind(this);
        this.setContourPos = this.setContourPos.bind(this);
    }


    public setTool(tool:string) {
        this.setState( prevState => {
            return {
                tool: tool,
                contours: prevState.contours,
                selectedContour: prevState.selectedContour,
            };
        });
    }

    public setContours(contours:any) {
        console.log("setContours");
        this.setState( prevState => {
            return {
                tool: prevState.tool,
                contours: contours,
                selectedContour: prevState.selectedContour,
            }
        });
    }

    /**
    select contour and make it active
    */
    public selectContour(index:number) {
        this.setState( prevState => {
            return {
                tool: prevState.tool,
                contours: prevState.contours,
                selectedContour: index,
            }
        });
    }

    public setVertexPos(vertexIndex:number, x:number, y:number) {
        this.setState( prevState => {
            let newState = prevState;
            newState.contours[newState.selectedContour].vertexes[vertexIndex].x = x;
            newState.contours[newState.selectedContour].vertexes[vertexIndex].y = y;
            return newState;
        });
    }
    public setContourPos(contourIndex:number, x:number, y:number) {
        this.setState( prevState => {
            let newState = prevState;
            for(let i=0; i< newState.contours[contourIndex].vertexes.length; i++) {
                newState.contours[contourIndex].vertexes[i].x += x;
                newState.contours[contourIndex].vertexes[i].y += y;
            }
            return newState;
        });
    }

    public render() {
        return (
            <div id="main-wrapper">
                <MainMenu setContours={this.setContours} />
                <Toolbar tool={this.state.tool} setTool={this.setTool} />
                <Sidebar tool={this.state.tool}
                    contours={this.state.contours}
                    selectContour={this.selectContour}
                    selectedContour={this.state.selectedContour}
                    />
                <CanvasWrapper state={this.state}
                    setContours={this.setContours}
                    setVertexPos={this.setVertexPos}
                    setContourPos={this.setContourPos}
                    />
            </div>
        );
    }
}

