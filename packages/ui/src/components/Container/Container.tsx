import { cn } from '../../lib/cn';
import type { ContainerProps } from './Container.types';
import { containerBaseClasses, containerSizeClasses } from './Container.variants';

export function Container({
  children,
  size = 'lg',
  as: Component = 'main',
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(containerBaseClasses, containerSizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}