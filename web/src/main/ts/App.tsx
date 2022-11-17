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
        this.setContourDragPos = this.setContourDragPos.bind(this);
        this.collapseContour = this.collapseContour.bind(this);
        this.addContour = this.addContour.bind(this);
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

    private sanitizeContours(contours:any) {
        for(let i=0;i<contours.length;i++) {
            contours[i].x = 0;
            contours[i].y = 0;
        }
        return contours;
    }

    public setContours(contours:any) {
        console.log("setContours");
        this.setState( prevState => {
            return {
                tool: prevState.tool,
                contours: this.sanitizeContours(contours),
                selectedContour: prevState.selectedContour,
            }
        });
    }

    public addContour(vertexes:any) {
        this.setState({
            contours: [ ...this.state.contours, {
                title: "New Contour " + this.state.contours.length,
                x: 0,
                y: 0,
                vertexes: vertexes
            } ]
        });
        this.setTool("edit");
        this.selectContour( this.state.contours.length );
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
    public setContourDragPos(contourIndex:number, x:number, y:number) {
        this.setState( prevState => {
            let newState = prevState;
            newState.contours[contourIndex].x = x;
            newState.contours[contourIndex].y = y;
            return newState;
        });
    }

    public collapseContour(contourIndex:number) {
        this.setState( prevState => {
            let newState = prevState;
            let x = newState.contours[contourIndex].x;
            let y = newState.contours[contourIndex].y;
            for(let i=0; i< newState.contours[contourIndex].vertexes.length; i++) {
                newState.contours[contourIndex].vertexes[i].x += x;
                newState.contours[contourIndex].vertexes[i].y += y;
            }
            newState.contours[contourIndex].x = 0;
            newState.contours[contourIndex].y = 0;
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
                    setTool={this.setTool}
                    />
                <CanvasWrapper state={this.state}
                    setContours={this.setContours}
                    setVertexPos={this.setVertexPos}
                    setContourDragPos={this.setContourDragPos}
                    collapseContour={this.collapseContour}
                    selectContour={this.selectContour}
                    addContour={this.addContour}
                    />
            </div>
        );
    }
}

