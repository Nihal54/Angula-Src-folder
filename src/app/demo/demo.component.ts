import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public batch = "Angular";
  public fees = 16500

  DisplayDetails()
  {
    return "This is Web Development Batch"
  }

}
