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
import { Contour } from "./model/Contour";
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.history = [];
        _this.historyIndex = 0;
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
        _this.removeContour = _this.removeContour.bind(_this);
        _this.removeSelectedContour = _this.removeSelectedContour.bind(_this);
        _this.setActiveContourTitle = _this.setActiveContourTitle.bind(_this);
        _this.getActiveContourTitle = _this.getActiveContourTitle.bind(_this);
        _this.undo = _this.undo.bind(_this);
        _this.redo = _this.redo.bind(_this);
        return _this;
    }
    App.prototype.undo = function () {
        if (this.history.length < 1
            || this.historyIndex < 0 || this.historyIndex > this.history.length) {
            return;
        }
        this.historyIndex++;
        this.setState(this.history[this.historyIndex]);
        console.log("undo", this.historyIndex, this.history);
    };
    App.prototype.redo = function () {
        if (this.history.length < 1
            || this.historyIndex < 1
        //                 || this.historyIndex > this.history.length
        ) {
            return;
        }
        this.historyIndex--;
        this.setState(this.history[this.historyIndex]);
        console.log("redo", this.historyIndex, this.history);
    };
    App.prototype["do"] = function (newState) {
        // drop data for redo, because we are doing something new
        this.history.splice(0, this.historyIndex);
        this.historyIndex = 0;
        // store in history
        this.setState(newState);
        this.history.unshift(JSON.parse(JSON.stringify(this.state))); // full clone
        console.log("do", this.historyIndex, this.history);
    };
    App.prototype.setTool = function (tool) {
        this["do"]({ tool: tool });
        //         this.setState({ tool:tool });
    };
    App.prototype.sanitizeContours = function (contours) {
        for (var i = 0; i < contours.length; i++) {
            contours[i].x = 0;
            contours[i].y = 0;
        }
        return contours;
    };
    App.prototype.setContours = function (contours) {
        this["do"]({ contours: this.sanitizeContours(contours) });
    };
    App.prototype.addContour = function (vertexes) {
        this["do"]({
            contours: __spreadArrays(this.state.contours, [new Contour("New Contour " + this.state.contours.length, vertexes)]),
            tool: "edit",
            selectedContour: this.state.contours.length
        });
        //         this.setTool("edit");
        //         this.selectContour( this.state.contours.length );
    };
    App.prototype.removeContour = function (contourIndex) {
        if (this.state.selectedContour < 0
            && this.state.selectedContour >= this.state.contours.length) {
            return;
        }
        var contours = this.state.contours;
        contours.splice(contourIndex, 1);
        this["do"]({ contours: contours });
    };
    App.prototype.removeSelectedContour = function () {
        this.removeContour(this.state.selectedContour);
    };
    /**
    select contour and make it active
    */
    App.prototype.selectContour = function (index) {
        this["do"]({ selectedContour: index });
    };
    App.prototype.setActiveContourTitle = function (title) {
        if (this.state.selectedContour < 0
            && this.state.selectedContour >= this.state.contours.length) {
            return;
        }
        var contours = this.state.contours;
        contours[this.state.selectedContour].title = title;
        this["do"]({ contours: contours });
    };
    App.prototype.getActiveContourTitle = function () {
        if (typeof this.state.contours[this.state.selectedContour] === 'undefined'
            || typeof this.state.contours[this.state.selectedContour].title === 'undefined') {
            return "";
        }
        return this.state.contours[this.state.selectedContour].title;
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
            React.createElement(MainMenu, { contours: this.state.contours, setContours: this.setContours }),
            React.createElement(Toolbar, { tool: this.state.tool, setTool: this.setTool, undo: this.undo, redo: this.redo }),
            React.createElement(Sidebar, { tool: this.state.tool, contours: this.state.contours, selectContour: this.selectContour, selectedContour: this.state.selectedContour, setTool: this.setTool, removeSelectedContour: this.removeSelectedContour, activeContourTitle: this.getActiveContourTitle(), setActiveContourTitle: this.setActiveContourTitle }),
            React.createElement(CanvasWrapper, { state: this.state, setContours: this.setContours, setVertexPos: this.setVertexPos, setContourDragPos: this.setContourDragPos, collapseContour: this.collapseContour, selectContour: this.selectContour, addContour: this.addContour })));
    };
    return App;
}(React.Component));
export { App };
