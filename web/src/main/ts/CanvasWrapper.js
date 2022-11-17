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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React from "react";
import { Stage, Layer, Group, Line } from "react-konva";
/// TODO class too long
var CanvasWrapper = /** @class */ (function (_super) {
    __extends(CanvasWrapper, _super);
    function CanvasWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.tempVertexes = [];
        _this.diamondShape = [
            0, -5,
            5, 0,
            0, 5,
            -5, 0
        ];
        _this.state = {
            points: [],
            mousePos: { x: 0, y: 0 }
        };
        _this.vertexDragMove = _this.vertexDragMove.bind(_this);
        _this.contourDragMove = _this.contourDragMove.bind(_this);
        _this.contourDragEnd = _this.contourDragEnd.bind(_this);
        _this.contourMouseDown = _this.contourMouseDown.bind(_this);
        _this.stageMouseDown = _this.stageMouseDown.bind(_this);
        _this.stageMouseMove = _this.stageMouseMove.bind(_this);
        _this.createdVertexMouseDown = _this.createdVertexMouseDown.bind(_this);
        return _this;
    }
    CanvasWrapper.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.state.tool !== prevProps.state.tool) {
            this.setState({ points: [] });
        }
    };
    CanvasWrapper.prototype.vertexDragMove = function (event, vertexIndex) {
        if (this.props.state.tool !== "edit") {
            return;
        }
        this.props.setVertexPos(vertexIndex, event.target.attrs.x, event.target.attrs.y);
    };
    CanvasWrapper.prototype.contourDragMove = function (event, contourIndex) {
        if (this.props.state.tool !== "edit") {
            return;
        }
        this.props.setContourDragPos(contourIndex, event.target.attrs.x, event.target.attrs.y);
    };
    CanvasWrapper.prototype.contourDragEnd = function (event, contourIndex) {
        if (this.props.state.tool !== "edit") {
            return;
        }
        this.props.collapseContour(contourIndex);
    };
    CanvasWrapper.prototype.contourMouseDown = function (event, contourIndex) {
        if (this.props.state.tool !== "edit") {
            return;
        }
        this.props.selectContour(contourIndex);
    };
    CanvasWrapper.prototype.stageMouseDown = function (event) {
        if (this.props.state.tool !== "create") {
            return;
        }
        console.log("stageMouseDown", event);
        var pos = event.target.getStage().getPointerPosition();
        this.setState({
            points: __spreadArrays(this.state.points, [{ x: pos.x, y: pos.y }]),
            mousePos: { x: pos.x, y: pos.y }
        });
    };
    CanvasWrapper.prototype.createdVertexMouseDown = function (event, vertexIndex) {
        if (this.props.state.tool !== "create"
            || vertexIndex !== 0) {
            return;
        }
        console.log("first vertex clicked");
        event.cancelBubble = true;
        this.props.addContour(this.state.points);
        this.setState({ points: [] });
    };
    CanvasWrapper.prototype.stageMouseMove = function (event) {
        if (this.props.state.tool !== "create"
            || this.state.points.length < 1) {
            return;
        }
        var pos = event.target.getStage().getPointerPosition();
        this.setState({
            mousePos: { x: pos.x, y: pos.y }
        });
    };
    /// TODO method too long
    CanvasWrapper.prototype.render = function () {
        var _this = this;
        var createdPoints = [];
        this.state.points.forEach(function (vertex) {
            createdPoints.push(vertex.x);
            createdPoints.push(vertex.y);
        });
        if (this.state.points.length > 0) {
            createdPoints.push(this.state.mousePos.x);
            createdPoints.push(this.state.mousePos.y);
        }
        return (React.createElement("div", { id: "canvas-wrapper" },
            React.createElement(Stage, { width: window.innerWidth, height: window.innerHeight, onMouseDown: this.stageMouseDown, onMouseMove: this.stageMouseMove },
                React.createElement(Layer, null,
                    this.props.state.contours.map(function (contour, contourIndex) {
                        var points = [];
                        contour.vertexes.forEach(function (vertex) {
                            points.push(vertex.x);
                            points.push(vertex.y);
                        });
                        return (React.createElement(Line, { key: "line" + contourIndex, points: points, stroke: "black", strokeWidth: 2, closed: true, onDragMove: function (e) { return _this.contourDragMove(e, contourIndex); }, onDragEnd: function (e) { return _this.contourDragEnd(e, contourIndex); }, onMouseDown: function (e) { return _this.contourMouseDown(e, contourIndex); }, x: contour.x, y: contour.y, draggable: _this.props.state.tool === "edit" }));
                    }),
                    this.props.state.contours.map(function (contour, contourIndex) {
                        return (React.createElement(Group, { key: contourIndex }, contourIndex === _this.props.state.selectedContour ?
                            contour.vertexes.map(function (vertex, vertexIndex) { return (React.createElement(Line, { key: vertexIndex, points: _this.diamondShape, x: vertex.x + contour.x, y: vertex.y + contour.y, fill: "#009999", stroke: "black", strokeWidth: 1, closed: true, onDragMove: function (e) { return _this.vertexDragMove(e, vertexIndex); }, draggable: _this.props.state.tool === "edit" })); }) : ""));
                    })),
                this.props.state.tool === "create" ? (React.createElement(Layer, null,
                    React.createElement(Line, { points: createdPoints, stroke: "blue", strokeWidth: 2, closed: false }),
                    React.createElement(Group, { key: "createdPoints" }, this.state.points.map(function (vertex, vertexIndex) { return (React.createElement(Line, { key: vertexIndex, points: _this.diamondShape, x: vertex.x, y: vertex.y, fill: "#009999", stroke: "blue", strokeWidth: 1, closed: true, onMouseDown: function (e) { return _this.createdVertexMouseDown(e, vertexIndex); } })); })))) : "")));
    };
    return CanvasWrapper;
}(React.Component));
export default CanvasWrapper;
