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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
System.register("ToolbarButton", ["react"], function (exports_1, context_1) {
    "use strict";
    var react_1, ToolbarButton;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            ToolbarButton = /** @class */ (function (_super) {
                __extends(ToolbarButton, _super);
                function ToolbarButton(props) {
                    var _this = _super.call(this, props) || this;
                    _this.click = _this.click.bind(_this);
                    return _this;
                }
                ToolbarButton.prototype.click = function (event) {
                    this.props.setTool(this.props.name);
                };
                ToolbarButton.prototype.render = function () {
                    var isActive = this.props.name != "" && this.props.name == this.props.currentTool;
                    return (react_1["default"].createElement("button", { className: "toolbar-button " + (isActive ? "toolbar-button__active" : ""), onClick: this.click },
                        react_1["default"].createElement("i", { className: "fa-solid " + this.props.icon }),
                        this.props.label));
                };
                ToolbarButton.defaultProps = {
                    name: "",
                    currentTool: "",
                    setTool: function (tool) { }
                };
                return ToolbarButton;
            }(react_1["default"].Component));
            exports_1("ToolbarButton", ToolbarButton);
            // }
        }
    };
});
// /<reference path="ToolbarButton.tsx"/>
System.register("Toolbar", ["react", "ToolbarButton"], function (exports_2, context_2) {
    "use strict";
    var react_2, ToolbarButton_1, Toolbar;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (react_2_1) {
                react_2 = react_2_1;
            },
            function (ToolbarButton_1_1) {
                ToolbarButton_1 = ToolbarButton_1_1;
            }
        ],
        execute: function () {// /<reference path="ToolbarButton.tsx"/>
            Toolbar = /** @class */ (function (_super) {
                __extends(Toolbar, _super);
                function Toolbar() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Toolbar.prototype.render = function () {
                    return (react_2["default"].createElement("div", { id: "toolbar" },
                        react_2["default"].createElement(ToolbarButton_1.ToolbarButton, { label: "Undo", icon: "fa-rotate-left" }),
                        react_2["default"].createElement(ToolbarButton_1.ToolbarButton, { label: "Redo", icon: "fa-rotate-right" }),
                        react_2["default"].createElement(ToolbarButton_1.ToolbarButton, { label: "Select", icon: "fa-arrow-pointer", name: "select", currentTool: this.props.tool, setTool: this.props.setTool }),
                        react_2["default"].createElement(ToolbarButton_1.ToolbarButton, { label: "Move", icon: "fa-up-down-left-right", name: "move", currentTool: this.props.tool, setTool: this.props.setTool }),
                        react_2["default"].createElement(ToolbarButton_1.ToolbarButton, { label: "New Contour", icon: "fa-plus", name: "create", currentTool: this.props.tool, setTool: this.props.setTool }),
                        react_2["default"].createElement(ToolbarButton_1.ToolbarButton, { label: "Show Labels", icon: "fa-eye" })));
                };
                return Toolbar;
            }(react_2["default"].Component));
            exports_2("Toolbar", Toolbar);
            // }
        }
    };
});
System.register("BaseToolSidebar", ["react"], function (exports_3, context_3) {
    "use strict";
    var react_3, BaseToolSidebar;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (react_3_1) {
                react_3 = react_3_1;
            }
        ],
        execute: function () {
            BaseToolSidebar = /** @class */ (function (_super) {
                __extends(BaseToolSidebar, _super);
                function BaseToolSidebar() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                BaseToolSidebar.defaultProps = {
                    isActive: false
                };
                return BaseToolSidebar;
            }(react_3["default"].Component));
            exports_3("BaseToolSidebar", BaseToolSidebar);
            // }
        }
    };
});
System.register("CreateToolSidebar", ["react", "BaseToolSidebar"], function (exports_4, context_4) {
    "use strict";
    var react_4, BaseToolSidebar_1, CreateToolSidebar;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (react_4_1) {
                react_4 = react_4_1;
            },
            function (BaseToolSidebar_1_1) {
                BaseToolSidebar_1 = BaseToolSidebar_1_1;
            }
        ],
        execute: function () {
            CreateToolSidebar = /** @class */ (function (_super) {
                __extends(CreateToolSidebar, _super);
                function CreateToolSidebar() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                CreateToolSidebar.prototype.render = function () {
                    return (react_4["default"].createElement("div", { className: "tool-sidebar tool-sidebar__create " + (this.props.isActive ? 'tool-sidebar__active' : '') },
                        react_4["default"].createElement("h3", null, "Create Tool"),
                        react_4["default"].createElement("p", null, "click on canvas to create vertexes of new contour"),
                        react_4["default"].createElement("button", null, "Close Contour")));
                };
                return CreateToolSidebar;
            }(BaseToolSidebar_1.BaseToolSidebar));
            exports_4("CreateToolSidebar", CreateToolSidebar);
            // }
        }
    };
});
System.register("MoveToolSidebar", ["react", "BaseToolSidebar"], function (exports_5, context_5) {
    "use strict";
    var react_5, BaseToolSidebar_2, MoveToolSidebar;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (react_5_1) {
                react_5 = react_5_1;
            },
            function (BaseToolSidebar_2_1) {
                BaseToolSidebar_2 = BaseToolSidebar_2_1;
            }
        ],
        execute: function () {
            MoveToolSidebar = /** @class */ (function (_super) {
                __extends(MoveToolSidebar, _super);
                function MoveToolSidebar() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MoveToolSidebar.prototype.render = function () {
                    return (react_5["default"].createElement("div", { className: "tool-sidebar tool-sidebar__create " + (this.props.isActive ? 'tool-sidebar__active' : '') },
                        react_5["default"].createElement("h3", null, "Move Tool"),
                        react_5["default"].createElement("p", null, "Drag and drop contour")));
                };
                return MoveToolSidebar;
            }(BaseToolSidebar_2.BaseToolSidebar));
            exports_5("MoveToolSidebar", MoveToolSidebar);
            // }
        }
    };
});
System.register("SelectToolSidebar", ["react", "BaseToolSidebar"], function (exports_6, context_6) {
    "use strict";
    var react_6, BaseToolSidebar_3, SelectToolSidebar;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (react_6_1) {
                react_6 = react_6_1;
            },
            function (BaseToolSidebar_3_1) {
                BaseToolSidebar_3 = BaseToolSidebar_3_1;
            }
        ],
        execute: function () {
            SelectToolSidebar = /** @class */ (function (_super) {
                __extends(SelectToolSidebar, _super);
                function SelectToolSidebar() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                SelectToolSidebar.prototype.render = function () {
                    return (react_6["default"].createElement("div", { className: "tool-sidebar tool-sidebar__create " + (this.props.isActive ? 'tool-sidebar__active' : '') },
                        react_6["default"].createElement("h3", null, "Select Tool"),
                        react_6["default"].createElement("p", null, "Click on contour to select and edit vertexes position")));
                };
                return SelectToolSidebar;
            }(BaseToolSidebar_3.BaseToolSidebar));
            exports_6("SelectToolSidebar", SelectToolSidebar);
            // }
        }
    };
});
// /<reference path="BaseToolSidebar.tsx"/>
// /<reference path="CreateToolSidebar.tsx"/>
// /<reference path="SelectToolSidebar.tsx"/>
// /<reference path="MoveToolSidebar.tsx"/>
System.register("Sidebar", ["react", "CreateToolSidebar", "MoveToolSidebar", "SelectToolSidebar"], function (exports_7, context_7) {
    "use strict";
    var react_7, CreateToolSidebar_1, MoveToolSidebar_1, SelectToolSidebar_1, Sidebar;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (react_7_1) {
                react_7 = react_7_1;
            },
            function (CreateToolSidebar_1_1) {
                CreateToolSidebar_1 = CreateToolSidebar_1_1;
            },
            function (MoveToolSidebar_1_1) {
                MoveToolSidebar_1 = MoveToolSidebar_1_1;
            },
            function (SelectToolSidebar_1_1) {
                SelectToolSidebar_1 = SelectToolSidebar_1_1;
            }
        ],
        execute: function () {// /<reference path="BaseToolSidebar.tsx"/>
            // /<reference path="CreateToolSidebar.tsx"/>
            // /<reference path="SelectToolSidebar.tsx"/>
            // /<reference path="MoveToolSidebar.tsx"/>
            Sidebar = /** @class */ (function (_super) {
                __extends(Sidebar, _super);
                function Sidebar() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Sidebar.prototype.render = function () {
                    return (react_7["default"].createElement("div", { id: "sidebar" },
                        react_7["default"].createElement(CreateToolSidebar_1.CreateToolSidebar, { isActive: this.props.tool == "create" }),
                        react_7["default"].createElement(SelectToolSidebar_1.SelectToolSidebar, { isActive: this.props.tool == "select" }),
                        react_7["default"].createElement(MoveToolSidebar_1.MoveToolSidebar, { isActive: this.props.tool == "move" })));
                };
                return Sidebar;
            }(react_7["default"].Component));
            exports_7("Sidebar", Sidebar);
            // }
        }
    };
});
System.register("inc/makeUpdates", ["konva/lib/Global"], function (exports_8, context_8) {
    "use strict";
    var Global_1, propsToSkip, zIndexWarningShowed, dragWarningShowed, EVENTS_NAMESPACE, useStrictMode, DRAGGABLE_WARNING, Z_INDEX_WARNING, EMPTY_PROPS;
    var __moduleName = context_8 && context_8.id;
    function toggleStrictMode(value) {
        useStrictMode = value;
    }
    exports_8("toggleStrictMode", toggleStrictMode);
    function applyNodeProps(instance, props, oldProps) {
        if (oldProps === void 0) { oldProps = EMPTY_PROPS; }
        if (props === oldProps) {
            console.error('same props');
        }
        // don't use zIndex in react-konva
        if (!zIndexWarningShowed && 'zIndex' in props) {
            console.warn(Z_INDEX_WARNING);
            zIndexWarningShowed = true;
        }
        // check correct draggable usage
        if (!dragWarningShowed && props.draggable) {
            var hasPosition = props.x !== undefined || props.y !== undefined;
            var hasEvents = props.onDragEnd || props.onDragMove;
            if (hasPosition && !hasEvents) {
                console.warn(DRAGGABLE_WARNING);
                dragWarningShowed = true;
            }
        }
        // check old props
        // we need to unset properties that are not in new props
        // and remove all events
        for (var key in oldProps) {
            if (propsToSkip[key]) {
                continue;
            }
            var isEvent = key.slice(0, 2) === 'on';
            var propChanged = oldProps[key] !== props[key];
            // if that is a changed event, we need to remvoe it
            if (isEvent && propChanged) {
                var eventName = key.substr(2).toLowerCase();
                if (eventName.substr(0, 7) === 'content') {
                    eventName =
                        'content' +
                            eventName.substr(7, 1).toUpperCase() +
                            eventName.substr(8);
                }
                instance.off(eventName, oldProps[key]);
            }
            var toRemove = !props.hasOwnProperty(key);
            if (toRemove) {
                instance.setAttr(key, undefined);
            }
        }
        var strictUpdate = useStrictMode || props._useStrictMode;
        var updatedProps = {};
        var hasUpdates = false;
        var newEvents = {};
        for (var key in props) {
            if (propsToSkip[key]) {
                continue;
            }
            var isEvent = key.slice(0, 2) === 'on';
            var toAdd = oldProps[key] !== props[key];
            if (isEvent && toAdd) {
                var eventName = key.substr(2).toLowerCase();
                if (eventName.substr(0, 7) === 'content') {
                    eventName =
                        'content' +
                            eventName.substr(7, 1).toUpperCase() +
                            eventName.substr(8);
                }
                // check that event is not undefined
                if (props[key]) {
                    newEvents[eventName] = props[key];
                }
            }
            if (!isEvent &&
                (props[key] !== oldProps[key] ||
                    (strictUpdate && props[key] !== instance.getAttr(key)))) {
                hasUpdates = true;
                updatedProps[key] = props[key];
            }
        }
        if (hasUpdates) {
            instance.setAttrs(updatedProps);
            updatePicture(instance);
        }
        // subscribe to events AFTER we set attrs
        // we need it to fix https://github.com/konvajs/react-konva/issues/471
        // settings attrs may add events. Like "draggable: true" will add "mousedown" listener
        for (var eventName in newEvents) {
            instance.on(eventName + EVENTS_NAMESPACE, newEvents[eventName]);
        }
    }
    exports_8("applyNodeProps", applyNodeProps);
    function updatePicture(node) {
        if (!Global_1.Konva.autoDrawEnabled) {
            var drawingNode = node.getLayer() || node.getStage();
            drawingNode && drawingNode.batchDraw();
        }
    }
    exports_8("updatePicture", updatePicture);
    return {
        setters: [
            function (Global_1_1) {
                Global_1 = Global_1_1;
            }
        ],
        execute: function () {
            propsToSkip = {
                children: true,
                ref: true,
                key: true,
                style: true,
                forwardedRef: true,
                unstable_applyCache: true,
                unstable_applyDrawHitFromCache: true
            };
            zIndexWarningShowed = false;
            dragWarningShowed = false;
            exports_8("EVENTS_NAMESPACE", EVENTS_NAMESPACE = '.react-konva-event');
            useStrictMode = false;
            DRAGGABLE_WARNING = "ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.\nPosition of a node will be changed during drag&drop, so you should update state of the react app as well.\nConsider to add onDragMove or onDragEnd events.\nFor more info see: https://github.com/konvajs/react-konva/issues/256\n";
            Z_INDEX_WARNING = "ReactKonva: You are using \"zIndex\" attribute for a Konva node.\nreact-konva may get confused with ordering. Just define correct order of elements in your render function of a component.\nFor more info see: https://github.com/konvajs/react-konva/issues/194\n";
            EMPTY_PROPS = {};
        }
    };
});
System.register("inc/ReactKonvaHostConfig", ["konva/lib/Core", "inc/makeUpdates", "scheduler", "react-reconciler/constants"], function (exports_9, context_9) {
    "use strict";
    var Core_1, makeUpdates_1, constants_1, NO_CONTEXT, UPDATE_SIGNAL, scheduleTimeout, cancelTimeout, noTimeout, isPrimaryRenderer, warnsIfNotActing, supportsMutation, getCurrentEventPriority;
    var __moduleName = context_9 && context_9.id;
    function appendInitialChild(parentInstance, child) {
        if (typeof child === 'string') {
            // Noop for string children of Text (eg <Text>foo</Text>)
            console.error("Do not use plain text as child of Konva.Node. You are using text: " + child);
            return;
        }
        parentInstance.add(child);
        makeUpdates_1.updatePicture(parentInstance);
    }
    exports_9("appendInitialChild", appendInitialChild);
    function createInstance(type, props, internalInstanceHandle) {
        var NodeClass = Core_1["default"][type];
        if (!NodeClass) {
            console.error("Konva has no node with the type " + type + ". Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: \"import \"konva/lib/shapes/" + type + "\"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html");
            NodeClass = Core_1["default"].Group;
        }
        // we need to split props into events and non events
        // we we can pass non events into constructor directly
        // that way the performance should be better
        // we we apply change "applyNodeProps"
        // then it will trigger change events on first run
        // but we don't need them!
        var propsWithoutEvents = {};
        var propsWithOnlyEvents = {};
        for (var key in props) {
            var isEvent = key.slice(0, 2) === 'on';
            if (isEvent) {
                propsWithOnlyEvents[key] = props[key];
            }
            else {
                propsWithoutEvents[key] = props[key];
            }
        }
        var instance = new NodeClass(propsWithoutEvents);
        makeUpdates_1.applyNodeProps(instance, propsWithOnlyEvents);
        return instance;
    }
    exports_9("createInstance", createInstance);
    function createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
        console.error("Text components are not supported for now in ReactKonva. Your text is: \"" + text + "\"");
    }
    exports_9("createTextInstance", createTextInstance);
    function finalizeInitialChildren(domElement, type, props) {
        return false;
    }
    exports_9("finalizeInitialChildren", finalizeInitialChildren);
    function getPublicInstance(instance) {
        return instance;
    }
    exports_9("getPublicInstance", getPublicInstance);
    function prepareForCommit() {
        return null;
    }
    exports_9("prepareForCommit", prepareForCommit);
    function preparePortalMount() {
        return null;
    }
    exports_9("preparePortalMount", preparePortalMount);
    function prepareUpdate(domElement, type, oldProps, newProps) {
        return UPDATE_SIGNAL;
    }
    exports_9("prepareUpdate", prepareUpdate);
    function resetAfterCommit() {
        // Noop
    }
    exports_9("resetAfterCommit", resetAfterCommit);
    function resetTextContent(domElement) {
        // Noop
    }
    exports_9("resetTextContent", resetTextContent);
    function shouldDeprioritizeSubtree(type, props) {
        return false;
    }
    exports_9("shouldDeprioritizeSubtree", shouldDeprioritizeSubtree);
    function getRootHostContext() {
        return NO_CONTEXT;
    }
    exports_9("getRootHostContext", getRootHostContext);
    function getChildHostContext() {
        return NO_CONTEXT;
    }
    exports_9("getChildHostContext", getChildHostContext);
    // export const schedulePassiveEffects = scheduleDeferredCallback;
    // export const cancelPassiveEffects = cancelDeferredCallback;
    function shouldSetTextContent(type, props) {
        return false;
    }
    exports_9("shouldSetTextContent", shouldSetTextContent);
    function appendChild(parentInstance, child) {
        if (child.parent === parentInstance) {
            child.moveToTop();
        }
        else {
            parentInstance.add(child);
        }
        makeUpdates_1.updatePicture(parentInstance);
    }
    exports_9("appendChild", appendChild);
    function appendChildToContainer(parentInstance, child) {
        if (child.parent === parentInstance) {
            child.moveToTop();
        }
        else {
            parentInstance.add(child);
        }
        makeUpdates_1.updatePicture(parentInstance);
    }
    exports_9("appendChildToContainer", appendChildToContainer);
    function insertBefore(parentInstance, child, beforeChild) {
        // child._remove() will not stop dragging
        // but child.remove() will stop it, but we don't need it
        // removing will reset zIndexes
        child._remove();
        parentInstance.add(child);
        child.setZIndex(beforeChild.getZIndex());
        makeUpdates_1.updatePicture(parentInstance);
    }
    exports_9("insertBefore", insertBefore);
    function insertInContainerBefore(parentInstance, child, beforeChild) {
        insertBefore(parentInstance, child, beforeChild);
    }
    exports_9("insertInContainerBefore", insertInContainerBefore);
    function removeChild(parentInstance, child) {
        child.destroy();
        child.off(makeUpdates_1.EVENTS_NAMESPACE);
        makeUpdates_1.updatePicture(parentInstance);
    }
    exports_9("removeChild", removeChild);
    function removeChildFromContainer(parentInstance, child) {
        child.destroy();
        child.off(makeUpdates_1.EVENTS_NAMESPACE);
        makeUpdates_1.updatePicture(parentInstance);
    }
    exports_9("removeChildFromContainer", removeChildFromContainer);
    function commitTextUpdate(textInstance, oldText, newText) {
        console.error("Text components are not yet supported in ReactKonva. You text is: \"" + newText + "\"");
    }
    exports_9("commitTextUpdate", commitTextUpdate);
    function commitMount(instance, type, newProps) {
        // Noop
    }
    exports_9("commitMount", commitMount);
    function commitUpdate(instance, updatePayload, type, oldProps, newProps) {
        makeUpdates_1.applyNodeProps(instance, newProps, oldProps);
    }
    exports_9("commitUpdate", commitUpdate);
    function hideInstance(instance) {
        instance.hide();
        makeUpdates_1.updatePicture(instance);
    }
    exports_9("hideInstance", hideInstance);
    function hideTextInstance(textInstance) {
        // Noop
    }
    exports_9("hideTextInstance", hideTextInstance);
    function unhideInstance(instance, props) {
        if (props.visible == null || props.visible) {
            instance.show();
        }
    }
    exports_9("unhideInstance", unhideInstance);
    function unhideTextInstance(textInstance, text) {
        // Noop
    }
    exports_9("unhideTextInstance", unhideTextInstance);
    function clearContainer(container) {
        // Noop
    }
    exports_9("clearContainer", clearContainer);
    function detachDeletedInstance() { }
    exports_9("detachDeletedInstance", detachDeletedInstance);
    return {
        setters: [
            function (Core_1_1) {
                Core_1 = Core_1_1;
            },
            function (makeUpdates_1_1) {
                makeUpdates_1 = makeUpdates_1_1;
            },
            function (scheduler_1_1) {
                exports_9({
                    "now": scheduler_1_1["unstable_now"],
                    "idlePriority": scheduler_1_1["unstable_IdlePriority"],
                    "run": scheduler_1_1["unstable_runWithPriority"]
                });
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            NO_CONTEXT = {};
            UPDATE_SIGNAL = {};
            // for react-spring capability
            Core_1["default"].Node.prototype._applyProps = makeUpdates_1.applyNodeProps;
            exports_9("scheduleTimeout", scheduleTimeout = setTimeout);
            exports_9("cancelTimeout", cancelTimeout = clearTimeout);
            exports_9("noTimeout", noTimeout = -1);
            // The Konva renderer is secondary to the React DOM renderer.
            exports_9("isPrimaryRenderer", isPrimaryRenderer = false);
            exports_9("warnsIfNotActing", warnsIfNotActing = true);
            exports_9("supportsMutation", supportsMutation = true);
            exports_9("getCurrentEventPriority", getCurrentEventPriority = function () { return constants_1.DefaultEventPriority; });
        }
    };
});
System.register("inc/ReactKonvaCore", ["react", "konva/lib/Core", "react-reconciler", "react-reconciler/constants", "inc/ReactKonvaHostConfig", "inc/makeUpdates", "its-fine"], function (exports_10, context_10) {
    /**
     * Based on ReactArt.js
     * Copyright (c) 2017-present Lavrenov Anton.
     * All rights reserved.
     *
     * MIT
     */
    'use strict';
    var react_8, Core_2, react_reconciler_1, constants_2, HostConfig, makeUpdates_2, its_fine_1, StageWrap, Layer, FastLayer, Group, Label, Rect, Circle, Ellipse, Wedge, Line, Sprite, Image, Text, TextPath, Star, Ring, Arc, Tag, Path, RegularPolygon, Arrow, Shape, Transformer, KonvaRenderer, Stage, useStrictMode;
    var __moduleName = context_10 && context_10.id;
    function usePrevious(value) {
        var ref = react_8["default"].useRef();
        react_8["default"].useLayoutEffect(function () {
            ref.current = value;
        });
        return ref.current;
    }
    return {
        setters: [
            function (react_8_1) {
                react_8 = react_8_1;
            },
            function (Core_2_1) {
                Core_2 = Core_2_1;
            },
            function (react_reconciler_1_1) {
                react_reconciler_1 = react_reconciler_1_1;
            },
            function (constants_2_1) {
                constants_2 = constants_2_1;
            },
            function (HostConfig_1) {
                HostConfig = HostConfig_1;
            },
            function (makeUpdates_2_1) {
                makeUpdates_2 = makeUpdates_2_1;
            },
            function (its_fine_1_1) {
                its_fine_1 = its_fine_1_1;
            }
        ],
        execute: function () {
            StageWrap = function (props) {
                var container = react_8["default"].useRef();
                var stage = react_8["default"].useRef();
                var fiberRef = react_8["default"].useRef();
                var oldProps = usePrevious(props);
                var Bridge = its_fine_1.useContextBridge();
                var _setRef = function (stage) {
                    var forwardedRef = props.forwardedRef;
                    if (!forwardedRef) {
                        return;
                    }
                    if (typeof forwardedRef === 'function') {
                        forwardedRef(stage);
                    }
                    else {
                        forwardedRef.current = stage;
                    }
                };
                react_8["default"].useLayoutEffect(function () {
                    stage.current = new Core_2["default"].Stage({
                        width: props.width,
                        height: props.height,
                        container: container.current
                    });
                    _setRef(stage.current);
                    // @ts-ignore
                    fiberRef.current = KonvaRenderer.createContainer(stage.current, constants_2.LegacyRoot, false, null);
                    KonvaRenderer.updateContainer(react_8["default"].createElement(Bridge, {}, props.children), fiberRef.current);
                    return function () {
                        if (!Core_2["default"].isBrowser) {
                            return;
                        }
                        _setRef(null);
                        KonvaRenderer.updateContainer(null, fiberRef.current, null);
                        stage.current.destroy();
                    };
                }, []);
                react_8["default"].useLayoutEffect(function () {
                    _setRef(stage.current);
                    makeUpdates_2.applyNodeProps(stage.current, props, oldProps);
                    KonvaRenderer.updateContainer(react_8["default"].createElement(Bridge, {}, props.children), fiberRef.current, null);
                });
                return react_8["default"].createElement('div', {
                    ref: container,
                    accessKey: props.accessKey,
                    className: props.className,
                    role: props.role,
                    style: props.style,
                    tabIndex: props.tabIndex,
                    title: props.title
                });
            };
            exports_10("Layer", Layer = 'Layer');
            exports_10("FastLayer", FastLayer = 'FastLayer');
            exports_10("Group", Group = 'Group');
            exports_10("Label", Label = 'Label');
            exports_10("Rect", Rect = 'Rect');
            exports_10("Circle", Circle = 'Circle');
            exports_10("Ellipse", Ellipse = 'Ellipse');
            exports_10("Wedge", Wedge = 'Wedge');
            exports_10("Line", Line = 'Line');
            exports_10("Sprite", Sprite = 'Sprite');
            exports_10("Image", Image = 'Image');
            exports_10("Text", Text = 'Text');
            exports_10("TextPath", TextPath = 'TextPath');
            exports_10("Star", Star = 'Star');
            exports_10("Ring", Ring = 'Ring');
            exports_10("Arc", Arc = 'Arc');
            exports_10("Tag", Tag = 'Tag');
            exports_10("Path", Path = 'Path');
            exports_10("RegularPolygon", RegularPolygon = 'RegularPolygon');
            exports_10("Arrow", Arrow = 'Arrow');
            exports_10("Shape", Shape = 'Shape');
            exports_10("Transformer", Transformer = 'Transformer');
            // @ts-ignore
            exports_10("KonvaRenderer", KonvaRenderer = react_reconciler_1["default"](HostConfig));
            KonvaRenderer.injectIntoDevTools({
                // @ts-ignore
                findHostInstanceByFiber: function () { return null; },
                bundleType: process.env.NODE_ENV !== 'production' ? 1 : 0,
                version: react_8["default"].version,
                rendererPackageName: 'react-konva'
            });
            exports_10("Stage", Stage = react_8["default"].forwardRef(function (props, ref) {
                return react_8["default"].createElement(its_fine_1.FiberProvider, {}, react_8["default"].createElement(StageWrap, __assign(__assign({}, props), { forwardedRef: ref })));
            }));
            exports_10("useStrictMode", useStrictMode = makeUpdates_2.toggleStrictMode);
        }
    };
});
System.register("CanvasWrapper", ["react", "inc/ReactKonvaCore"], function (exports_11, context_11) {
    "use strict";
    var react_9, ReactKonvaCore_1, CanvasWrapper;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (react_9_1) {
                react_9 = react_9_1;
            },
            function (ReactKonvaCore_1_1) {
                ReactKonvaCore_1 = ReactKonvaCore_1_1;
            }
        ],
        execute: function () {
            // export namespace contoureditor {
            CanvasWrapper = /** @class */ (function (_super) {
                __extends(CanvasWrapper, _super);
                function CanvasWrapper(props) {
                    var _this = _super.call(this, props) || this;
                    _this.tempVertexes = [];
                    return _this;
                    //             this.canvasRef = React.createRef();
                    //             this.click = this.click.bind(this);
                }
                CanvasWrapper.prototype.componentDidMount = function () {
                    //             this.canvasElement = this.canvasRef.current;
                    //             if( !(this.canvasCtx = this.canvasElement.getContext('2d')) ) {
                    //                 throw "Canvas not initialized";
                    //             }
                    //             this.redraw();
                };
                //         public redraw() {
                //             let ctx = this.canvasCtx;
                //             ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
                //             ctx.rect(10, 10, 150, 100);
                //             ctx.stroke();
                //
                //             ctx.beginPath();
                //             let first:boolean = true;
                //             for( let key in this.tempVertexes ) {
                //                 let vertex:any = this.tempVertexes[key];
                //                 if(first) {
                //                     ctx.moveTo( vertex.x, vertex.y);
                //                     first = false;
                //                     continue;
                //                 }
                //                 ctx.lineTo( vertex.x, vertex.y );
                //             }
                // //             ctx.closePath();
                //             ctx.stroke();
                //
                //             for( let key in this.tempVertexes ) {
                //                 let vertex:any = this.tempVertexes[key];
                //                 let x = vertex.x;
                //                 let y = vertex.y;
                //                 ctx.fillStyle = '#fff';
                //                 ctx.beginPath();
                //                 ctx.moveTo(x, y+5);
                //                 ctx.lineTo(x+5,y);
                //                 ctx.lineTo(x, y-5);
                //                 ctx.lineTo(x-5, y);
                //                 ctx.closePath();
                //                 ctx.fill();
                //                 ctx.stroke();
                //             }
                // //             ctx.fill();
                // //             ctx.stroke();
                //         }
                //         public click(event:any) {
                //             this.tempVertexes.push( { x: event.clientX - event.target.offsetLeft , y: event.clientY - event.target.offsetTop } );
                //             console.log(this.tempVertexes);
                //             this.redraw();
                //         }
                CanvasWrapper.prototype.render = function () {
                    //                 return (
                    //                     <div>CanvasWrapper</div>
                    //                 );
                    return (react_9["default"].createElement(ReactKonvaCore_1.Stage, null));
                    // {/*                 <Layer> */}
                    // {/*                     <Text text="Try click on rect" /> */}
                    // {/*                 </Layer> */}
                    // {/*             </Stage> */}
                    //             );
                    //             return (
                    //                 <div id="canvas-wrapper">
                    //                     <canvas ref={this.canvasRef} id="canvas"
                    //                         width="1000"
                    //                         height="1000"
                    //                         onClick={this.click}
                    //                         ></canvas>
                    //                 </div>
                    //             );
                };
                return CanvasWrapper;
            }(react_9["default"].Component));
            exports_11("default", CanvasWrapper);
            // }
        }
    };
});
System.register("App", ["react", "Toolbar", "Sidebar", "CanvasWrapper"], function (exports_12, context_12) {
    "use strict";
    var react_10, Toolbar_1, Sidebar_1, CanvasWrapper_1, App;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (react_10_1) {
                react_10 = react_10_1;
            },
            function (Toolbar_1_1) {
                Toolbar_1 = Toolbar_1_1;
            },
            function (Sidebar_1_1) {
                Sidebar_1 = Sidebar_1_1;
            },
            function (CanvasWrapper_1_1) {
                CanvasWrapper_1 = CanvasWrapper_1_1;
            }
        ],
        execute: function () {
            App = /** @class */ (function (_super) {
                __extends(App, _super);
                //         public static defaultState = {
                //             tool: "create"
                //         }
                function App(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        tool: "create"
                    };
                    _this.setTool = _this.setTool.bind(_this);
                    return _this;
                }
                App.prototype.setTool = function (tool) {
                    this.setState(function (prevState) {
                        return { tool: tool };
                    });
                };
                //         public constructor(props) {
                //             super(props);
                //             this.state = { items: [] };
                //             this.add = this.add.bind(this);
                //             this.update = this.update.bind(this);
                //             this.remove = this.remove.bind(this);
                //             this.loadList();
                //         }
                //
                //         public loadList() {
                //             this.sendData("/list", {}, ( responce )=>{
                //                 console.log( "Responce is:", responce );
                //                 let data = JSON.parse( responce );
                //                 console.log( "Data is:", data );
                //                 this.setState( prevState => ({
                //                         items: [ ...prevState.items, ...data.items ]
                //                     })
                //                 );
                //             });
                //         }
                //
                //         public sendData( url, data:any, callback:any = (responce)=>{ console.log( responce); } ) {
                //             let token = document.querySelector('meta[name="token"]').getAttribute("content");
                //             let issueId = document.querySelector('meta[name="issueId"]').getAttribute("content");
                //             data.issueId = issueId;
                //             fetch( url, {
                //                 method: "POST",
                //                 headers: {
                //                     'Content-Type': 'application/json;charset=utf-8',
                //                     "Authorization": "JWT " + token
                //                 },
                //                 body: JSON.stringify( data )
                //             }).then(responce => responce.text()).then( callback )
                //             .catch((error)=>{
                //                 console.error('Error:', error);
                //             });
                //         }
                //
                //         public add( newItem ) {
                // //             this.setState(prevState => ({
                // //                 items: [...prevState.items, newItem]
                // //             }));
                //             this.sendData("/addnewitem", newItem, ( responce ) => {
                //                 let data = JSON.parse( responce );
                //                 newItem.id = data.id;
                //                 this.setState(prevState => ({
                //                     items: [...prevState.items, newItem]
                //                 }));
                //             } );
                //             console.log( this.state.items );
                //         }
                //
                //         public update( index, item) {
                //             this.setState( prevState => {
                //                 prevState.items[index] = { ...prevState.items[index], ...item };
                //                 return prevState;
                //             });
                //             let updateItem = { ...item, index: index };
                //             this.sendData("/updateitem", updateItem );
                //             console.log( this.state.items );
                //         }
                //
                //         public remove( index ) {
                //             let id = this.state.items[ index ].id;
                //             this.setState( prevState => {
                //                 prevState.items.splice( index, 1 );
                //                 return prevState;
                //             });
                //             this.sendData( "/removeitem", { id: id });
                //             console.log( this.state.items );
                //         }
                App.prototype.render = function () {
                    return (react_10["default"].createElement("div", { id: "main-wrapper" },
                        react_10["default"].createElement(Toolbar_1.Toolbar, { tool: this.state.tool, setTool: this.setTool }),
                        react_10["default"].createElement(Sidebar_1.Sidebar, { tool: this.state.tool }),
                        react_10["default"].createElement(CanvasWrapper_1["default"], null)));
                };
                return App;
            }(react_10["default"].Component));
            exports_12("App", App);
            // }
        }
    };
});
System.register("index", ["react", "react-dom/client", "App"], function (exports_13, context_13) {
    "use strict";
    var react_11, client_1, App_1, wrapper;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (react_11_1) {
                react_11 = react_11_1;
            },
            function (client_1_1) {
                client_1 = client_1_1;
            },
            function (App_1_1) {
                App_1 = App_1_1;
            }
        ],
        execute: function () {
            // namespace contoureditor {
            // export default
            // alert(1);
            //     document.addEventListener('DOMContentLoaded', function(){
            wrapper = document.getElementById("contoureditor-wrapper");
            if (wrapper) {
                var root = client_1["default"].createRoot(wrapper);
                root.render(react_11["default"].createElement(react_11["default"].StrictMode, null,
                    react_11["default"].createElement(App_1.App, null)));
            }
            ;
            //     });
            // }
        }
    };
});
