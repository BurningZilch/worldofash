import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Observable } from "rxjs"
import { BlogsService } from "../../services/blogs.service" // Fixed BlogsService import - removed type-only import for dependency injection
import { BlogCardComponent } from "../blog-card/blog-card"
import { Blog } from "../../models/blog.model"

@Component({
  selector: "app-blogs-section", // Updated selector to match component name
  standalone: true,
  imports: [CommonModule, BlogCardComponent],
  template: `
    <section id="blogs" class="blogs">
      <div class="blogs__container">
        <h2 class="blogs__title">Latest Blog Posts</h2>
        <div class="blogs__divider"></div>
        <div class="blogs__grid">
          <app-blog-card
            *ngFor="let post of blogs$ | async; trackBy: trackByBlogId"
            [blog]="post">
          </app-blog-card>
        </div>
      </div>
    </section>
  `,
  styleUrl: "./blogs-section.scss", // Updated style file path
})
export class BlogsSection implements OnInit {
  // Updated class name to match
  blogs$!: Observable<Blog[]>

  constructor(private blogsService: BlogsService) {} // Updated service injection

  ngOnInit(): void {
    this.blogs$ = this.blogsService.getBlogs() // Updated service method call
  }

  trackByBlogId(index: number, blog: Blog): string {
    return blog.id
  }
}
