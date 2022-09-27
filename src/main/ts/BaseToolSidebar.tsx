namespace contoureditor {

    interface BaseToolSidebarProps {
        isActive: boolean
    }

    export class BaseToolSidebar extends React.Component<BaseToolSidebarProps,{}>{
        public static defaultProps = {
            isActive: false
        }
    }
}