import { cn } from '../../lib/cn';
import type { CardProps } from './Card.types';
import { cardBaseClasses, cardVariantClasses } from './Card.variants';

export function Card({ children, variant = 'default', className, ...props }: CardProps) {
  return (
    <div className={cn(cardBaseClasses, cardVariantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
}