import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from '@services/websocket.service';

@Component({
  selector: 'app-draw',
  standalone: true,
  imports: [],
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.css'
})
export class DrawComponent implements OnInit , AfterViewInit{
  

  @ViewChild('canvasRef',{static :false}) canvasRef: any;
  isAvaile: boolean =false;
  public with=400;
  public heigth=400;
  private cx:CanvasRenderingContext2D | null = null;
  private points:Array<any>= [];
  

  @HostListener('document:mousemove', ['$event'])
  onMouseMove=(e:any)=>{
    
   if(e.target.id==='canvasId' && this.isAvaile){ 
   this.write(e);
   }
  }

  @HostListener('click', ['$event'])
  onClick = (e: any) => {
    if (e.target.id === 'canvasId') {
      this.isAvaile = !this.isAvaile;
    }
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.render()
  }
  constructor(private socketWebService: WebsocketService) {
    this.socketWebService.callback.subscribe(res => {

      const { prevPost } = res;

      this.writeSingle(prevPost, false);
      console.log(res);
    })
    
  }

   private render(): void {
    const canvasEl = this.canvasRef.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = this.with;
    canvasEl.height = this.heigth;

   
    if(this.cx){
      this.cx.lineWidth = 3;
      this.cx.lineCap = 'round';
      this.cx.strokeStyle = 'black';
      this.cx.fillStyle = 'white';
      this.cx.fillRect(0, 0, this.with, this.heigth);
    }
  }
  private write(res: any): void {
    const canvasEl = this.canvasRef.nativeElement;
    const rect = canvasEl.getBoundingClientRect();
    const prevPos = {
      x: res.clientX - rect.left,
      y: res.clientY - rect.top,
    }

    this.writeSingle(prevPos);
  }

  private writeSingle(prevPos:any, emit: boolean = true) {
    this.points.push(prevPos);
    if (this.points.length > 3) {
      const prevPost = this.points[this.points.length - 1];
      const currentPost = this.points[this.points.length - 2];

      this.drawOnCanvas(prevPost, currentPost);
     if(emit){

       this.socketWebService.emitEvent({ prevPost })
     }
       

    }
  }

  private drawOnCanvas(prevPos: any, currentPost: any) {
    if (!this.cx) return;
    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPost.x, currentPost.y);
      this.cx.stroke();
    }
  }

  public clearCanvas = () => {
    this.points = [];
    if(true){

      this.cx?.clearRect(0, 0, this.with, this.heigth);
    }
  }
}