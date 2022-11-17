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
    addContour: ( points: any[] ) => void;
}

export interface CanvasWrapperState {
    points: any[];
    mousePos: any;
}

/// TODO class too long
export default class CanvasWrapper extends React.Component<CanvasWrapperProps, CanvasWrapperState> {
    public canvasRef:any;
    public canvasElement:any;
    public canvasCtx:any;
    public tempVertexes: any[] = [];
    private prevX:number;
    private prevY:number;
    private diamondShape: number[] = [
                                    0, -5,
                                    5, 0,
                                    0, 5,
                                    -5, 0
                                    ];

    public constructor(props) {
        super(props);
        this.state = {
            points: [],
            mousePos: { x:0, y:0 },
        };
        this.vertexDragMove = this.vertexDragMove.bind(this);
        this.contourDragMove = this.contourDragMove.bind(this);
        this.contourDragEnd = this.contourDragEnd.bind(this);
        this.contourMouseDown = this.contourMouseDown.bind(this);
        this.stageMouseDown = this.stageMouseDown.bind(this);
        this.stageMouseMove = this.stageMouseMove.bind(this);
        this.createdVertexMouseDown = this.createdVertexMouseDown.bind(this);
    }

    public componentDidUpdate(prevProps) {
        if(this.props.state.tool !== prevProps.state.tool) {
            this.setState({ points: [] });
        }
    }

    public vertexDragMove(event:any, vertexIndex: number) {
        if( this.props.state.tool !== "edit") { return; }
        this.props.setVertexPos(vertexIndex,  event.target.attrs.x,  event.target.attrs.y);
    }
    public contourDragMove(event:any, contourIndex:number){
        if( this.props.state.tool !== "edit") { return; }
        this.props.setContourDragPos( contourIndex, event.target.attrs.x,  event.target.attrs.y );
    }

    public contourDragEnd(event:any, contourIndex:number) {
        if( this.props.state.tool !== "edit") { return; }
        this.props.collapseContour( contourIndex );
    }

    public contourMouseDown(event:any, contourIndex:number) {
        if( this.props.state.tool !== "edit") { return; }
        this.props.selectContour( contourIndex );
    }

    public stageMouseDown(event:any) {
        if( this.props.state.tool !== "create") { return; }
        let pos = event.target.getStage().getPointerPosition();
        this.setState({
            points: [...this.state.points, {x:pos.x,y:pos.y}],
            mousePos: {x:pos.x,y:pos.y},
        });
    }

    public createdVertexMouseDown(event:any, vertexIndex:number) {
        if( this.props.state.tool !== "create"
            || vertexIndex !== 0
        ) {
            return;
        }
        event.cancelBubble = true;
        this.props.addContour( this.state.points );
        this.setState({ points: [] });
    }
    public stageMouseMove(event:any) {
        if( this.props.state.tool !== "create"
            || this.state.points.length < 1
        ) {
            return;
        }
        let pos = event.target.getStage().getPointerPosition();
        this.setState({
            mousePos: {x:pos.x, y:pos.y}
        });
    }

    /// TODO method too long
    public render() {
        let createdPoints = [];
        this.state.points.forEach( vertex => {
             createdPoints.push( vertex.x );
             createdPoints.push( vertex.y );
        });
        if( this.state.points.length > 0 ) {
            createdPoints.push( this.state.mousePos.x );
            createdPoints.push( this.state.mousePos.y );
        }
        return (
        <div  id="canvas-wrapper">
            <Stage width={window.innerWidth} height={window.innerHeight}
                onMouseDown={this.stageMouseDown}
                onMouseMove={this.stageMouseMove}
            >
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
                                onDragMove={ e=>this.contourDragMove(e, contourIndex) }
                                onDragEnd={ e=>this.contourDragEnd(e, contourIndex) }
                                onMouseDown={ e=>this.contourMouseDown(e, contourIndex) }
                                x={contour.x}
                                y={contour.y}
                                draggable={ this.props.state.tool === "edit" }
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
                                    points={this.diamondShape}
                                    x={vertex.x + contour.x }
                                    y={vertex.y + contour.y }
                                    fill="#009999"
                                    stroke="black"
                                    strokeWidth={1}
                                    closed={true}
                                    onDragMove={ e=>this.vertexDragMove(e, vertexIndex) }
                                    draggable={ this.props.state.tool === "edit" }
                                />
                            )) : "" }
                        </Group>
                    );
                 })  }
             </Layer>
             {
             this.props.state.tool === "create" ? (
                <Layer>
                    <Line
                        points={ createdPoints }
                        stroke="blue"
                        strokeWidth={2}
                        closed={false}
                    />
                    <Group key="createdPoints">
                    { this.state.points.map( ( vertex, vertexIndex )=> (
                        <Line
                            key={vertexIndex}
                            points={this.diamondShape}
                            x={vertex.x}
                            y={vertex.y}
                            fill="#009999"
                            stroke="blue"
                            strokeWidth={1}
                            closed={true}
                            onMouseDown={ e=>this.createdVertexMouseDown(e, vertexIndex) }
                        />
                    ) ) }
                    </Group>
                </Layer>
             ) : "" }
            </Stage>
        </div>
        );



    }
}
