import { CheckoutHeader } from '../../features/cart/components/CheckoutHeader';
import { CheckoutPageClient } from '../../features/checkout/components/CheckoutPageClient';

export default function CheckoutPage() {
  return (
    <>
      <CheckoutHeader />
      <CheckoutPageClient />
    </>
  );
}