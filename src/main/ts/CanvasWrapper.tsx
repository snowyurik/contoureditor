

namespace contoureditor {
    export class CanvasWrapper extends React.Component {

        public canvasElement:any;
        public canvasCtx:any;
        public tempVertexes: any[] = [];

        public constructor(props) {
            super(props);
            this.click = this.click.bind(this);
        }

        public componentDidMount() {
            this.canvasElement = this.refs.canvas;
            if( !(this.canvasCtx = this.canvasElement.getContext('2d')) ) {
                throw "Canvas not initialized";
            }
//             this.tempVertices = [];
            this.redraw();
        }

        public redraw() {
            let ctx = this.canvasCtx;
            ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
            ctx.rect(10, 10, 150, 100);
            ctx.stroke();

            ctx.beginPath();
            let first:boolean = true;
            for( let key in this.tempVertexes ) {
                let vertex:any = this.tempVertexes[key];
                if(first) {
                    ctx.moveTo( vertex.x, vertex.y);
                    first = false;
                    continue;
                }
                ctx.lineTo( vertex.x, vertex.y );
            }
//             ctx.closePath();
            ctx.stroke();

            for( let key in this.tempVertexes ) {
                let vertex:any = this.tempVertexes[key];
                let x = vertex.x;
                let y = vertex.y;
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.moveTo(x, y+5);
                ctx.lineTo(x+5,y);
                ctx.lineTo(x, y-5);
                ctx.lineTo(x-5, y);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
//             ctx.fill();
//             ctx.stroke();
        }

        public click(event:any) {
            this.tempVertexes.push( { x: event.clientX - event.target.offsetLeft , y: event.clientY - event.target.offsetTop } );
            console.log(this.tempVertexes);
            this.redraw();
        }

        public render() {
            return (
                <div id="canvas-wrapper">
                    <canvas ref="canvas" id="canvas"
                        width="1000"
                        height="1000"
                        onClick={this.click}
                        ></canvas>
                </div>
            );
        }
    }
}