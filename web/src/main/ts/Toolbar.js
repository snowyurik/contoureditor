// /<reference path="ToolbarButton.tsx"/>
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
import { ToolbarButton } from "./ToolbarButton";
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toolbar.prototype.render = function () {
        return (React.createElement("div", { id: "toolbar" },
            React.createElement(ToolbarButton, { label: "Undo", icon: "fa-rotate-left" }),
            React.createElement(ToolbarButton, { label: "Redo", icon: "fa-rotate-right" }),
            React.createElement(ToolbarButton, { label: "Select", icon: "fa-arrow-pointer", name: "select", currentTool: this.props.tool, setTool: this.props.setTool }),
            React.createElement(ToolbarButton, { label: "Move", icon: "fa-up-down-left-right", name: "move", currentTool: this.props.tool, setTool: this.props.setTool }),
            React.createElement(ToolbarButton, { label: "New Contour", icon: "fa-plus", name: "create", currentTool: this.props.tool, setTool: this.props.setTool }),
            React.createElement(ToolbarButton, { label: "Show Labels", icon: "fa-eye" })));
    };
    return Toolbar;
}(React.Component));
export { Toolbar };
// }
