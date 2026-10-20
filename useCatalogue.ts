import { useEffect, useState } from 'react'
import { supabase, configured } from './supabase'
import type { Category, Product } from './types'
export function useCatalogue() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(configured)
  const [error, setError] = useState<string | null>(configured ? null : 'NOT_CONFIGURED')
  useEffect(() => {
    if (!configured) return
    Promise.all([
      supabase.from('categories').select('*').order('name'),
      supabase.from('public_products').select('*').order('name')
    ]).then(([c, p]) => {
      if (c.error || p.error) setError((c.error || p.error)!.message)
      else { setCategories(c.data as Category[]); setProducts(p.data as Product[]) }
      setLoading(false)
    })
  }, [])
  return { products, categories, loading, error }
}
