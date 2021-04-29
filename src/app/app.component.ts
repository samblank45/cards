import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree', 
      username: 'sam', 
      content: 'Saw this awesome tree', 
      imageUrl: 'assets/tree.jpeg'
    },
    {
      title: 'Snow Mountain', 
      username: 'john', 
      content: 'Beautiful mountain', 
      imageUrl: 'assets/mountain.jpeg'
    },
    {
      title: 'mountain biking', 
      username: 'mountainman', 
      content: 'look at my sweet bike', 
      imageUrl: 'assets/biking.jpeg'
    }
  ]

}
