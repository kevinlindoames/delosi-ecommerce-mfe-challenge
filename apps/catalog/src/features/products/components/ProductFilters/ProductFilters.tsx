import { LinkButton } from '@delosi/ui';
import { productSortOptions } from '../../constants/product-filter-options';
import type { ProductFiltersProps } from './ProductFilters.types';

export function ProductFilters({
  categories,
  selectedCategory,
  search,
  sort,
}: ProductFiltersProps) {
  return (
    <form className="mt-8 grid gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] md:grid-cols-[1fr_220px_220px_auto]">
      <div>
        <label
          htmlFor="search"
          className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]"
        >
          Search
        </label>

        <input
          id="search"
          name="search"
          defaultValue={search}
          placeholder="Search products..."
          className="mt-2 h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
        />
      </div>

      <div>
        <label
          htmlFor="category"
          className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]"
        >
          Category
        </label>

        <select
          id="category"
          name="category"
          defaultValue={selectedCategory ?? ''}
          className="mt-2 h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
        >
          <option value="">All categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="sort"
          className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]"
        >
          Sort
        </label>

        <select
          id="sort"
          name="sort"
          defaultValue={sort ?? ''}
          className="mt-2 h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
        >
          <option value="">Default</option>

          {productSortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-end gap-2">
        <button
          type="submit"
          className="h-11 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 text-sm font-bold text-white transition hover:bg-[var(--color-primary-hover)]"
        >
          Apply
        </button>

        <LinkButton href="/products" variant="outline">
          Clear
        </LinkButton>
      </div>
    </form>
  );
}