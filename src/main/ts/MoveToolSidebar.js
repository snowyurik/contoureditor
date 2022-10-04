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
// namespace contoureditor {
import React from "react";
import { BaseToolSidebar } from "./BaseToolSidebar";
var MoveToolSidebar = /** @class */ (function (_super) {
    __extends(MoveToolSidebar, _super);
    function MoveToolSidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoveToolSidebar.prototype.render = function () {
        return (React.createElement("div", { className: "tool-sidebar tool-sidebar__create " + (this.props.isActive ? 'tool-sidebar__active' : '') },
            React.createElement("h3", null, "Move Tool"),
            React.createElement("p", null, "Drag and drop contour")));
    };
    return MoveToolSidebar;
}(BaseToolSidebar));
export { MoveToolSidebar };
// }
