import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})

export class WorldComponent implements AfterViewInit {
  constructor() {

  }
  private starsInterval: any;
  @ViewChild('stars') stars: ElementRef;
  private context: CanvasRenderingContext2D;
  @HostListener('window:resize', ['$event'])
    starsGen(event?) {
      clearInterval(this.starsInterval);
      (this.stars.nativeElement as HTMLCanvasElement).width = (this.stars.nativeElement as HTMLCanvasElement).clientWidth;
      (this.stars.nativeElement as HTMLCanvasElement).height = (this.stars.nativeElement as HTMLCanvasElement).clientHeight;
      this.starsInterval = setInterval(() => {
        this.generateStars(3);
      }, 100);
      setTimeout(() => {
        clearInterval(this.starsInterval);
      }, 10000);
  }
  ngAfterViewInit() {
    this.context = (this.stars.nativeElement as HTMLCanvasElement).getContext('2d');
    this.starsGen();
  }
  generateStars(starRadius) {
    this.context.beginPath();
    this.context.arc(starRadius + (Math.random() * (this.stars.nativeElement as HTMLCanvasElement).width),
      starRadius + (Math.random() * (this.stars.nativeElement as HTMLCanvasElement).height),
      starRadius * Math.random(), 0, Math.PI * 2, false);
    const rand = Math.random();
    if (rand <= 0.5) {
      this.context.fillStyle = 'rgba(255, 255, 255, 1)';
      this.context.shadowColor = 'rgba(255, 255, 255, 0.5)';
      this.context.shadowBlur = 3;
    } else if (rand > 0.75) {
      this.context.fillStyle = 'rgba(255, 254, 196, 1)';
      this.context.shadowColor = 'rgba(255, 254, 196, 0.5)';
      this.context.shadowBlur = 4;
    } else {
      this.context.fillStyle = 'rgba(192, 247, 255, 1)';
      this.context.shadowColor = 'rgba(192, 247, 255, 0.5)';
      this.context.shadowBlur = 7;
    }
    this.context.fill();
  }
}
