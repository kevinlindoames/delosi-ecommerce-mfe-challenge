'use client';

import { routes } from '@delosi/config';
import { useDebouncedValue } from '@delosi/ui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { productSortOptions } from '../../constants/product-filter-options';
import type { ProductFiltersProps } from './ProductFilters.types';

export function ProductFilters({
  categories,
  selectedCategory,
  search,
  sort,
}: ProductFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState(search ?? '');
  const debouncedSearch = useDebouncedValue(searchValue, 350);

  const updateParams = useCallback(
    (updates: Record<string, string | undefined>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value?.trim()) {
          params.set(key, value.trim());
        } else {
          params.delete(key);
        }
      });

      const queryString = params.toString();
      router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  useEffect(() => {
    setSearchValue(search ?? '');
  }, [search]);

  useEffect(() => {
    const normalizedSearch = debouncedSearch.trim();
    const currentSearch = searchParams.get('search') ?? '';

    if (normalizedSearch === currentSearch) {
      return;
    }

    updateParams({
      search: normalizedSearch || undefined,
    });
  }, [debouncedSearch, searchParams, updateParams]);

  function handleCategoryChange(category: string) {
    updateParams({
      category: category || undefined,
    });
  }

  function handleSortChange(sortValue: string) {
    updateParams({
      sort: sortValue || undefined,
    });
  }

  function clearFilters() {
    setSearchValue('');
    router.replace(routes.products, { scroll: false });
  }

  return (
    <form
      className="mt-8 grid gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] md:grid-cols-[1fr_220px_220px_auto]"
      onSubmit={(event) => event.preventDefault()}
    >
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
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
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
          value={selectedCategory ?? ''}
          onChange={(event) => handleCategoryChange(event.target.value)}
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
          value={sort ?? ''}
          onChange={(event) => handleSortChange(event.target.value)}
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
          type="button"
          onClick={clearFilters}
          className="h-11 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 text-sm font-bold text-white transition hover:bg-[var(--color-primary-hover)]"
        >
          Clear
        </button>
      </div>
    </form>
  );
}