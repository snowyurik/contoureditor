// /<reference path="BaseToolSidebar.tsx"/>
// /<reference path="CreateToolSidebar.tsx"/>
// /<reference path="SelectToolSidebar.tsx"/>
// /<reference path="MoveToolSidebar.tsx"/>
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
import { MoveToolSidebar } from "./MoveToolSidebar";
import { SelectToolSidebar } from "./SelectToolSidebar";
var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sidebar.prototype.render = function () {
        return (React.createElement("div", { id: "sidebar" },
            React.createElement(CreateToolSidebar, { isActive: this.props.tool == "create" }),
            React.createElement(SelectToolSidebar, { isActive: this.props.tool == "select" }),
            React.createElement(MoveToolSidebar, { isActive: this.props.tool == "move" })));
    };
    return Sidebar;
}(React.Component));
export { Sidebar };
// }
