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
import { BaseToolSidebar } from "./BaseToolSidebar";
var EditToolSidebar = /** @class */ (function (_super) {
    __extends(EditToolSidebar, _super);
    function EditToolSidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditToolSidebar.prototype.render = function () {
        return (React.createElement("div", { className: "tool-sidebar tool-sidebar__create " + (this.props.isActive ? 'tool-sidebar__active' : '') },
            React.createElement("h3", null, "Edit Tool"),
            React.createElement("p", null, "Drag and drop contours and vertexes of selected contour")));
    };
    return EditToolSidebar;
}(BaseToolSidebar));
export { EditToolSidebar };
