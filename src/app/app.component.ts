import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: string = 'tutorial';
  label: string = 'input';

  public onClick(event: any): void {
    this.label = 'new Label';
  }
}
