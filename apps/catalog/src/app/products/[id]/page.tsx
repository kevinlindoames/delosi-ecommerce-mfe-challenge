import {  siteConfig } from '@delosi/config';
import { getProductById } from '@delosi/products';
import { Container } from '@delosi/ui';
import { CatalogHeader } from '../../../features/cart/components/CatalogHeader';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetail } from '../../../features/products/components/ProductDetail';

type ProductDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function isValidProductId(id: string): boolean {
  return /^\d+$/.test(id);
}

async function getSafeProduct(id: string) {
  if (!isValidProductId(id)) {
    return null;
  }

  try {
    return await getProductById(id);
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getSafeProduct(id);

  if (!product) {
    return {
      title: `Product not found | ${siteConfig.name}`,
      description: 'The requested product could not be found.',
    };
  }

  const title = `${product.title} | ${siteConfig.name}`;
  const description = product.description.slice(0, 155);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: product.image,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getSafeProduct(id);

  if (!product) {
    notFound();
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.image,
    category: product.category,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: product.rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: product.rating.rate,
          reviewCount: product.rating.count,
        }
      : undefined,
  };

  return (
    <>
      <CatalogHeader />

      <Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productJsonLd),
          }}
        />

        <ProductDetail product={product} />
      </Container>
    </>
  );
}