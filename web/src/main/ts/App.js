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
import { Toolbar } from "./Toolbar";
import { Sidebar } from "./Sidebar";
import CanvasWrapper from "./CanvasWrapper";
import { MainMenu } from "./MainMenu";
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            tool: "create",
            contours: [],
            selectedContour: null
        };
        _this.setTool = _this.setTool.bind(_this);
        _this.setContours = _this.setContours.bind(_this);
        _this.selectContour = _this.selectContour.bind(_this);
        _this.setVertexPos = _this.setVertexPos.bind(_this);
        _this.setContourDragPos = _this.setContourDragPos.bind(_this);
        _this.collapseContour = _this.collapseContour.bind(_this);
        _this.addContour = _this.addContour.bind(_this);
        return _this;
    }
    App.prototype.setTool = function (tool) {
        this.setState(function (prevState) {
            return {
                tool: tool,
                contours: prevState.contours,
                selectedContour: prevState.selectedContour
            };
        });
    };
    App.prototype.sanitizeContours = function (contours) {
        for (var i = 0; i < contours.length; i++) {
            contours[i].x = 0;
            contours[i].y = 0;
        }
        return contours;
    };
    App.prototype.setContours = function (contours) {
        var _this = this;
        console.log("setContours");
        this.setState(function (prevState) {
            return {
                tool: prevState.tool,
                contours: _this.sanitizeContours(contours),
                selectedContour: prevState.selectedContour
            };
        });
    };
    App.prototype.addContour = function (vertexes) {
        this.setState({
            contours: __spreadArrays(this.state.contours, [{
                    title: "New Contour " + this.state.contours.length,
                    x: 0,
                    y: 0,
                    vertexes: vertexes
                }])
        });
        this.setTool("edit");
        this.selectContour(this.state.contours.length);
    };
    /**
    select contour and make it active
    */
    App.prototype.selectContour = function (index) {
        this.setState(function (prevState) {
            return {
                tool: prevState.tool,
                contours: prevState.contours,
                selectedContour: index
            };
        });
    };
    App.prototype.setVertexPos = function (vertexIndex, x, y) {
        this.setState(function (prevState) {
            var newState = prevState;
            newState.contours[newState.selectedContour].vertexes[vertexIndex].x = x;
            newState.contours[newState.selectedContour].vertexes[vertexIndex].y = y;
            return newState;
        });
    };
    App.prototype.setContourDragPos = function (contourIndex, x, y) {
        this.setState(function (prevState) {
            var newState = prevState;
            newState.contours[contourIndex].x = x;
            newState.contours[contourIndex].y = y;
            return newState;
        });
    };
    App.prototype.collapseContour = function (contourIndex) {
        this.setState(function (prevState) {
            var newState = prevState;
            var x = newState.contours[contourIndex].x;
            var y = newState.contours[contourIndex].y;
            for (var i = 0; i < newState.contours[contourIndex].vertexes.length; i++) {
                newState.contours[contourIndex].vertexes[i].x += x;
                newState.contours[contourIndex].vertexes[i].y += y;
            }
            newState.contours[contourIndex].x = 0;
            newState.contours[contourIndex].y = 0;
            return newState;
        });
    };
    App.prototype.render = function () {
        return (React.createElement("div", { id: "main-wrapper" },
            React.createElement(MainMenu, { setContours: this.setContours }),
            React.createElement(Toolbar, { tool: this.state.tool, setTool: this.setTool }),
            React.createElement(Sidebar, { tool: this.state.tool, contours: this.state.contours, selectContour: this.selectContour, selectedContour: this.state.selectedContour, setTool: this.setTool }),
            React.createElement(CanvasWrapper, { state: this.state, setContours: this.setContours, setVertexPos: this.setVertexPos, setContourDragPos: this.setContourDragPos, collapseContour: this.collapseContour, selectContour: this.selectContour, addContour: this.addContour })));
    };
    return App;
}(React.Component));
export { App };
