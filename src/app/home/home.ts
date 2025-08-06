import { Component } from '@angular/core';
import { ProjectsSectionComponent } from '../components/projects-section/projects-section'; // Updated import path

@Component({
  selector: 'app-home',
  standalone: true, // <--- This was missing!
  imports: [ProjectsSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
