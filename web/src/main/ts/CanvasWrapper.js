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
import { Stage, Layer, Group, Line } from "react-konva";
var CanvasWrapper = /** @class */ (function (_super) {
    __extends(CanvasWrapper, _super);
    function CanvasWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.tempVertexes = [];
        _this.handleDragMoveVertex = _this.handleDragMoveVertex.bind(_this);
        _this.handleDragMoveContour = _this.handleDragMoveContour.bind(_this);
        _this.handleDragStartContour = _this.handleDragStartContour.bind(_this);
        _this.handleDragEndContour = _this.handleDragEndContour.bind(_this);
        return _this;
    }
    CanvasWrapper.prototype.handleDragMoveVertex = function (event, vertexIndex) {
        this.props.setVertexPos(vertexIndex, event.target.attrs.x, event.target.attrs.y);
    };
    CanvasWrapper.prototype.handleDragMoveContour = function (event, contourIndex) {
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
    };
    CanvasWrapper.prototype.handleDragStartContour = function (event) {
        this.prevX = 0;
        this.prevY = 0;
    };
    CanvasWrapper.prototype.handleDragEndContour = function (event, contourIndex) {
        console.log("move contour 2", [event.target.attrs.x, event.target.attrs.y]);
        var x = event.target.attrs.x;
        var y = event.target.attrs.y;
        event.target.attrs.x = 0;
        event.target.attrs.y = 0;
        this.props.setContourPos(contourIndex, x, y);
        event.target.attrs.x = 0;
        event.target.attrs.y = 0;
    };
    CanvasWrapper.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { id: "canvas-wrapper" },
            React.createElement(Stage, { width: window.innerWidth, height: window.innerHeight },
                React.createElement(Layer, null,
                    this.props.state.contours.map(function (contour, contourIndex) {
                        var points = [];
                        contour.vertexes.forEach(function (vertex) {
                            points.push(vertex.x);
                            points.push(vertex.y);
                        });
                        return (React.createElement(Line, { key: "line" + contourIndex, points: points, stroke: "black", strokeWidth: 2, closed: true, onDragStart: _this.handleDragStartContour, onDragMove: function (e) { return _this.handleDragMoveContour(e, contourIndex); }, onDragEnd: function (e) { return _this.handleDragEndContour(e, contourIndex); }, x: 0, y: 0, draggable: true }));
                    }),
                    this.props.state.contours.map(function (contour, contourIndex) {
                        return (React.createElement(Group, { key: contourIndex }, contourIndex === _this.props.state.selectedContour ?
                            contour.vertexes.map(function (vertex, vertexIndex) { return (React.createElement(Line, { key: vertexIndex, points: [
                                    0, -5,
                                    5, 0,
                                    0, 5,
                                    -5, 0
                                ], x: vertex.x, y: vertex.y, fill: "#009999", stroke: "black", strokeWidth: 1, closed: true, onDragMove: function (e) { return _this.handleDragMoveVertex(e, vertexIndex); }, draggable: true })); }) : ""));
                    })))));
    };
    return CanvasWrapper;
}(React.Component));
export default CanvasWrapper;
