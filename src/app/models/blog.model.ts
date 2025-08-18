export interface Blog {
  id: string
  title: string
  excerpt: string
  content: string
  date: Date
  author: string
  tags: string[]
  featuredImage?: string
  slug: string
}
