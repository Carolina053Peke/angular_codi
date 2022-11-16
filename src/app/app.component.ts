import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  nombre = "Carla";

  visible = false;
  decirAdios() {
    this.visible = true;
  }

  ngOnInit() {
    console.log('componente inicializado...');
  }
  
}
