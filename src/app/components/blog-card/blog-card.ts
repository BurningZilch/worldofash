import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router" // Added RouterModule import for routerLink
import type { Blog } from "../../models/blog.model"

@Component({
  selector: "app-blog-card",
  standalone: true, // Made component standalone
  imports: [CommonModule, RouterModule], // Added RouterModule to imports
  template: `
    <article class="blog__card">
      <img
        *ngIf="blog.featuredImage"
        [src]="blog.featuredImage"
        [alt]="blog.title"
        class="blog__card-image"
        loading="lazy">
      <div class="blog__card-content">
        <div class="blog__card-meta">
          <time class="blog__card-date">{{ formatDate(blog.date) }}</time>
          <span class="blog__card-author">by {{ blog.author }}</span>
        </div>
        <h3 class="blog__card-title">{{ blog.title }}</h3>
        <p class="blog__card-excerpt">{{ blog.excerpt }}</p>
        <div class="blog__card-tags">
          <span
            *ngFor="let tag of blog.tags"
            class="blog__card-tag">
            {{ tag }}
          </span>
        </div>
        <div class="blog__card-actions">
          <a
            [routerLink]="['/blog', blog.slug]"
            class="blog__card-read-more">
            Read More
          </a>
        </div>
      </div>
    </article>
  `,
  styleUrl: "./blog-card.scss",
})
export class BlogCardComponent {
  @Input({ required: true }) blog!: Blog

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date))
  }
}
