import React, { Component } from "react";
import { render } from "react-dom";
// import {} from "konva";
import {
  Stage, Layer, Text
} from "react-konva";
// from 'react-konva';
// from "./inc/ReactKonvaCore";
// from "react-konva/ReactKonvaCore";

// export namespace contoureditor {
    export default class CanvasWrapper extends React.Component {
        public canvasRef:any;
        public canvasElement:any;
        public canvasCtx:any;
        public tempVertexes: any[] = [];

        public constructor(props) {
            super(props);
//             this.canvasRef = React.createRef();
//             this.click = this.click.bind(this);
        }

        public componentDidMount() {
//             this.canvasElement = this.canvasRef.current;
//             if( !(this.canvasCtx = this.canvasElement.getContext('2d')) ) {
//                 throw "Canvas not initialized";
//             }
//             this.redraw();
        }

//         public redraw() {
//             let ctx = this.canvasCtx;
//             ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
//             ctx.rect(10, 10, 150, 100);
//             ctx.stroke();
//
//             ctx.beginPath();
//             let first:boolean = true;
//             for( let key in this.tempVertexes ) {
//                 let vertex:any = this.tempVertexes[key];
//                 if(first) {
//                     ctx.moveTo( vertex.x, vertex.y);
//                     first = false;
//                     continue;
//                 }
//                 ctx.lineTo( vertex.x, vertex.y );
//             }
// //             ctx.closePath();
//             ctx.stroke();
//
//             for( let key in this.tempVertexes ) {
//                 let vertex:any = this.tempVertexes[key];
//                 let x = vertex.x;
//                 let y = vertex.y;
//                 ctx.fillStyle = '#fff';
//                 ctx.beginPath();
//                 ctx.moveTo(x, y+5);
//                 ctx.lineTo(x+5,y);
//                 ctx.lineTo(x, y-5);
//                 ctx.lineTo(x-5, y);
//                 ctx.closePath();
//                 ctx.fill();
//                 ctx.stroke();
//             }
// //             ctx.fill();
// //             ctx.stroke();
//         }

//         public click(event:any) {
//             this.tempVertexes.push( { x: event.clientX - event.target.offsetLeft , y: event.clientY - event.target.offsetTop } );
//             console.log(this.tempVertexes);
//             this.redraw();
//         }

        public render() {
//                 return (
//                     <div>CanvasWrapper</div>
//                 );
//             return (
//                 <Stage />
//             );
            return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                 <Text text="react-konva working" />
             </Layer>
            </Stage>
            );
//             return (
//                 <div id="canvas-wrapper">
//                     <canvas ref={this.canvasRef} id="canvas"
//                         width="1000"
//                         height="1000"
//                         onClick={this.click}
//                         ></canvas>
//                 </div>
//             );
        }
    }
// }