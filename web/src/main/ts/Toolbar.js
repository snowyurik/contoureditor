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
import { ToolbarToolButton } from "./ToolbarToolButton";
import { ToolbarActionButton } from "./ToolbarActionButton";
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toolbar.prototype.render = function () {
        return (React.createElement("div", { id: "toolbar" },
            React.createElement(ToolbarActionButton, { label: "Undo", icon: "fa-rotate-left", onClick: this.props.undo }),
            React.createElement(ToolbarActionButton, { label: "Redo", icon: "fa-rotate-right", onClick: this.props.redo }),
            React.createElement(ToolbarToolButton, { label: "Edit", icon: "fa-up-down-left-right", name: "edit", currentTool: this.props.tool, setTool: this.props.setTool }),
            React.createElement(ToolbarToolButton, { label: "New Contour", icon: "fa-plus", name: "create", currentTool: this.props.tool, setTool: this.props.setTool })));
    };
    return Toolbar;
}(React.Component));
export { Toolbar };
