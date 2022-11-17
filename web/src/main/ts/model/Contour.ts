import { Vertex } from "./Vertex";

export class Contour {
    public title:string="";
    public x:number = 0;
    public y:number = 0;
    public vertexes: Vertex[] = [];

    public constructor(title:string, vertexes:Vertex[]) {
        this.title = title;
        this.vertexes = vertexes;
    }
}