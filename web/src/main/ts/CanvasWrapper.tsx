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
    selectContour: (index:number) => void;
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
        this.handleClickContour = this.handleClickContour.bind(this);
    }

    public handleDragMoveVertex(event:any, vertexIndex: number) {
        this.props.setVertexPos(vertexIndex,  event.target.attrs.x,  event.target.attrs.y);
    }
    public handleDragMoveContour(event:any, contourIndex:number){
        this.props.setContourDragPos( contourIndex, event.target.attrs.x,  event.target.attrs.y );
    }

    public handleDragStartContour(event:any) {
        this.prevX = 0;
        this.prevY = 0;
    }

    public handleDragEndContour(event:any, contourIndex:number) {
        this.props.collapseContour( contourIndex );
    }

    public handleClickContour(event:any, contourIndex:number) {
        this.props.selectContour( contourIndex );
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
                                onMouseDown={ e=>this.handleClickContour(e, contourIndex) }
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
