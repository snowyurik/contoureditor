import React, { Component } from "react";
import { render } from "react-dom";
import {
  Stage, Layer, Text, Rect, Group, Line
} from "react-konva";

export interface CanvasWrapperProps {
    setContours: (contours:any) => void;
    state: any;
    setVertexPos: (index:number, x:number, y:number) => void;
    setContourDragPos: (index:number, x:number, y:number) => void;
    collapseContour: (index:number) => void;
}

export default class CanvasWrapper extends React.Component<CanvasWrapperProps,{}> {
    public canvasRef:any;
    public canvasElement:any;
    public canvasCtx:any;
    public tempVertexes: any[] = [];
    private prevX:number;
    private prevY:number;

    public constructor(props) {
        super(props);
        this.handleDragMoveVertex = this.handleDragMoveVertex.bind(this);
        this.handleDragMoveContour = this.handleDragMoveContour.bind(this);
        this.handleDragStartContour = this.handleDragStartContour.bind(this);
        this.handleDragEndContour = this.handleDragEndContour.bind(this);
    }

    public handleDragMoveVertex(event:any, vertexIndex: number) {
        this.props.setVertexPos(vertexIndex,  event.target.attrs.x,  event.target.attrs.y);
    }
    public handleDragMoveContour(event:any, contourIndex:number){
        this.props.setContourDragPos( contourIndex, event.target.attrs.x,  event.target.attrs.y );
//         console.log("move contour", [event.target.attrs.x,  event.target.attrs.y]);
//         let x = event.target.attrs.x;
//         let y = event.target.attrs.y;
//         event.target.attrs.x = 0;
//         event.target.attrs.y = 0;
//         console.log("move contour 2", [event.target.attrs.x,  event.target.attrs.y]);
// //         let stage = event.target.getStage();
// //         stage.getPointerPosition().x;
// //         this.props.setContourPos( contourIndex, x - this.prevX, y - this.prevY);
//         this.prevX = x;
//         this.prevY = y;
        // kind of works but blinking and does not match cursor location
        // need better solution
        // problem is we are moving contour zero point together with vertexes
        // <Line x= > does not remain zero
        // Maybe

        // Maybe we can add Line.x/y to data model temporary and "collapse" contour back to normal on drag end?
    }

    public handleDragStartContour(event:any) {
        this.prevX = 0;
        this.prevY = 0;
    }

    public handleDragEndContour(event:any, contourIndex:number) {
        this.props.collapseContour( contourIndex );
    }

    public render() {
        return (
        <div  id="canvas-wrapper">
            <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                { this.props.state.contours.map(
                    (contour, contourIndex)=>{
                        let points = [];
                        contour.vertexes.forEach( vertex => {
                            points.push( vertex.x );
                            points.push( vertex.y );
                        });

                        return (
                            <Line key={"line"+contourIndex}
                                points={points}
                                stroke="black"
                                strokeWidth={2}
                                closed={true}
                                onDragStart={this.handleDragStartContour}
                                onDragMove={ e=>this.handleDragMoveContour(e, contourIndex) }
                                onDragEnd={ e=>this.handleDragEndContour(e, contourIndex) }
                                x={contour.x}
                                y={contour.y}
                                draggable
                            />
                            )
                        }
                    )
                }

                { this.props.state.contours.map( (contour, contourIndex)=>{
                    return (
                        <Group key={contourIndex}>
                            {
                                contourIndex === this.props.state.selectedContour ?
                                contour.vertexes.map( (vertex, vertexIndex)=>(
                                <Line
                                    key={vertexIndex}
                                    points={[
                                        0, -5,
                                        5, 0,
                                        0, 5,
                                        -5, 0
                                        ]}
                                    x={vertex.x + contour.x }
                                    y={vertex.y + contour.y }
                                    fill="#009999"
                                    stroke="black"
                                    strokeWidth={1}
                                    closed={true}
                                    onDragMove={ e=>this.handleDragMoveVertex(e, vertexIndex) }
                                    draggable
                                />
                            )) : "" }
                        </Group>
                    );
                 })  }
             </Layer>
            </Stage>
        </div>
        );



    }
}
