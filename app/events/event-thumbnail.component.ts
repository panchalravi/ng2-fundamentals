import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink] = "['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngSwitch]="event?.time" [ngClass] = "getStartTimeClass()">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
          <span>Location: {{event?.location?.address}}</span>
          <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
          Online URL: {{event?.onlineUrl}}
      </div>
    </div>  
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    .thumbnail { min-height: 210px; }
    .green { color: #00aa00 !important; }
    .bold { font-weight: bold; }
  `]
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;

  ngOnInit() {
  }

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    //[ngClass] expects return value in one of the following formats
    return isEarlyStart ? ['green', 'bold'] : [];
    //return { green: isEarlyStart, bold: isEarlyStart };
    //return isEarlyStart ? 'green bold' : '';
  }

}