import React, { Component } from "react";
import { render } from "react-dom";
import { Toolbar } from "./Toolbar";
import { Sidebar } from "./Sidebar";
import CanvasWrapper from "./CanvasWrapper";
import { MainMenu } from "./MainMenu";
import { Contour } from "./model/Contour";
import { Vertex } from "./model/Vertex";

interface AppState {
    tool: string,
    contours: Contour[],
    selectedContour: number,
}

export class App extends React.Component<{},AppState> {

    private history: any[] = [];
    private historyIndex: number=0;


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
        this.removeContour = this.removeContour.bind(this);
        this.removeSelectedContour = this.removeSelectedContour.bind(this);
        this.setActiveContourTitle = this.setActiveContourTitle.bind(this);
        this.getActiveContourTitle = this.getActiveContourTitle.bind(this);
        this.undo = this.undo.bind(this);
        this.redo = this.redo.bind(this);
    }

    public undo() {
        if( this.history.length < 1
            || this.historyIndex < 0 || this.historyIndex > this.history.length
        ) {
            return;
        }
        this.historyIndex++;
        this.setState( this.history[ this.historyIndex] );
        console.log("undo", this.historyIndex, this.history);
    }
    public redo() {
        if( this.history.length < 1
                || this.historyIndex < 1
//                 || this.historyIndex > this.history.length
        ) {
            return;
        }
        this.historyIndex--;
        this.setState( this.history[ this.historyIndex ] );
        console.log("redo", this.historyIndex, this.history);
    }
    public do( newState:any) {
        // drop data for redo, because we are doing something new
        this.history.splice(0, this.historyIndex);
        this.historyIndex = 0;
        // store in history
        this.setState(newState);
        this.history.unshift( JSON.parse(JSON.stringify(this.state)) ); // full clone
        console.log("do", this.historyIndex, this.history);
    }

    public setTool(tool:string) {
        this.do({ tool:tool });
//         this.setState({ tool:tool });
    }

    private sanitizeContours(contours:Contour[]) {
        for(let i=0;i<contours.length;i++) {
            contours[i].x = 0;
            contours[i].y = 0;
        }
        return contours;
    }

    public setContours(contours:Contour[]) {
        this.do({ contours: this.sanitizeContours(contours) });
    }

    public addContour(vertexes:Vertex[]) {
        this.do({
            contours: [ ...this.state.contours, new Contour( "New Contour " + this.state.contours.length, vertexes ) ],
            tool: "edit",
            selectedContour: this.state.contours.length
        });
//         this.setTool("edit");
//         this.selectContour( this.state.contours.length );
    }

    public removeContour(contourIndex:number) {
        if( this.state.selectedContour < 0
            && this.state.selectedContour >= this.state.contours.length
        ) {
            return;
        }
        let contours = this.state.contours;
        contours.splice(contourIndex,1);
        this.do({ contours: contours });
    }

    public removeSelectedContour() {
        this.removeContour( this.state.selectedContour );
    }

    /**
    select contour and make it active
    */
    public selectContour(index:number) {
        this.do({ selectedContour: index });
    }

    public setActiveContourTitle(title:string) {
        if( this.state.selectedContour < 0
            && this.state.selectedContour >= this.state.contours.length
        ) {
            return;
        }
        let contours = this.state.contours;
        contours[this.state.selectedContour].title = title;
        this.do({ contours: contours });
    }

    public getActiveContourTitle():string {
        if( typeof this.state.contours[this.state.selectedContour] === 'undefined'
            || typeof this.state.contours[this.state.selectedContour].title === 'undefined'
        ) {
            return "";
        }
        return this.state.contours[this.state.selectedContour].title;
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
                <MainMenu contours={this.state.contours}
                    setContours={this.setContours} />
                <Toolbar tool={this.state.tool}
                    setTool={this.setTool}
                    undo={this.undo}
                    redo={this.redo}
                    />
                <Sidebar tool={this.state.tool}
                    contours={this.state.contours}
                    selectContour={this.selectContour}
                    selectedContour={this.state.selectedContour}
                    setTool={this.setTool}
                    removeSelectedContour={this.removeSelectedContour}
                    activeContourTitle={this.getActiveContourTitle()}
                    setActiveContourTitle={this.setActiveContourTitle}
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

