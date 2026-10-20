export interface Category { id: string; name: string; slug: string }
export interface Product {
  id: string; category_id: string; name: string; species: string | null; description: string | null
  price: number; stock: number; low_stock_threshold: number; image_url: string | null
}
export interface AdminProduct extends Product { cost_price: number; archived: boolean }
