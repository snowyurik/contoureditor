var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
// import {} from "konva";
import { Stage, Layer, Text } from "react-konva";
// from 'react-konva';
// from "./inc/ReactKonvaCore";
// from "react-konva/ReactKonvaCore";
// export namespace contoureditor {
var CanvasWrapper = /** @class */ (function (_super) {
    __extends(CanvasWrapper, _super);
    function CanvasWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.tempVertexes = [];
        return _this;
        //             this.canvasRef = React.createRef();
        //             this.click = this.click.bind(this);
    }
    CanvasWrapper.prototype.componentDidMount = function () {
        //             this.canvasElement = this.canvasRef.current;
        //             if( !(this.canvasCtx = this.canvasElement.getContext('2d')) ) {
        //                 throw "Canvas not initialized";
        //             }
        //             this.redraw();
    };
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
    CanvasWrapper.prototype.render = function () {
        //                 return (
        //                     <div>CanvasWrapper</div>
        //                 );
        //             return (
        //                 <Stage />
        //             );
        return (React.createElement(Stage, { width: window.innerWidth, height: window.innerHeight },
            React.createElement(Layer, null,
                React.createElement(Text, { text: "react-konva working" }))));
        //             return (
        //                 <div id="canvas-wrapper">
        //                     <canvas ref={this.canvasRef} id="canvas"
        //                         width="1000"
        //                         height="1000"
        //                         onClick={this.click}
        //                         ></canvas>
        //                 </div>
        //             );
    };
    return CanvasWrapper;
}(React.Component));
export default CanvasWrapper;
// }
