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
import { CreateToolSidebar } from "./CreateToolSidebar";
import { EditToolSidebar } from "./EditToolSidebar";
import { SelectToolSidebar } from "./SelectToolSidebar";
import { ContourList } from "./ContourList";
var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sidebar.prototype.render = function () {
        return (React.createElement("div", { id: "sidebar" },
            React.createElement(CreateToolSidebar, { isActive: this.props.tool == "create" }),
            React.createElement(SelectToolSidebar, { isActive: this.props.tool == "select" }),
            React.createElement(EditToolSidebar, { isActive: this.props.tool == "edit" }),
            React.createElement(ContourList, { contours: this.props.contours, selectContour: this.props.selectContour, selectedContour: this.props.selectedContour, setTool: this.props.setTool })));
    };
    return Sidebar;
}(React.Component));
export { Sidebar };
