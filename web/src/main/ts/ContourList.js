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
var ContourList = /** @class */ (function (_super) {
    __extends(ContourList, _super);
    function ContourList(props) {
        var _this = _super.call(this, props) || this;
        _this.click = _this.click.bind(_this);
        return _this;
    }
    ContourList.prototype.click = function (index) {
        this.props.setTool("edit");
        this.props.selectContour(index);
    };
    ContourList.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "contour-list__wrapper" },
            React.createElement("ul", { className: "contour-list" }, this.props.contours.map(function (contour, index) { return (React.createElement("li", { key: index, className: "contour-list__item" + (index == _this.props.selectedContour ? " contour-list__item__active" : "") },
                React.createElement("span", { onClick: function () { _this.click(index); }, className: "contour-list__item-title" }, contour.title),
                React.createElement("ul", { className: "vertex-list" }, contour.vertexes.map(function (vertex, vertexIndex) { return (React.createElement("li", { key: vertexIndex, className: "vertex-list__item" },
                    "x: ",
                    contour.x + vertex.x,
                    ", y: ",
                    contour.x + vertex.y)); })))); }))));
    };
    return ContourList;
}(React.Component));
export { ContourList };
