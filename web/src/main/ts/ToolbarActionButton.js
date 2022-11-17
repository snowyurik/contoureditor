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
var ToolbarActionButton = /** @class */ (function (_super) {
    __extends(ToolbarActionButton, _super);
    function ToolbarActionButton(props) {
        return _super.call(this, props) || this;
    }
    ToolbarActionButton.prototype.render = function () {
        return (React.createElement("button", { className: "toolbar-button", onClick: this.props.onClick },
            React.createElement("i", { className: "fa-solid " + this.props.icon }),
            this.props.label));
    };
    return ToolbarActionButton;
}(React.Component));
export { ToolbarActionButton };
