import { Component } from "@angular/core"
import { ProjectsSectionComponent } from "../components/projects-section/projects-section"
import { BlogsSection } from "../components/blogs-section/blogs-section"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [ProjectsSectionComponent, BlogsSection],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class HomeComponent {}
