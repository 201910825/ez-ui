import React from 'react';
import { cn } from '@/docs/lib/utils';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizeClasses = {
  small: 'w-8 h-8',
  medium: 'w-12 h-12',
  large: 'w-16 h-16',
};

function Avatar({ src, alt, size = 'medium', className }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('rounded-full object-cover bg-[#6f6e6e3e]', sizeClasses[size], className)}
    />
  );
}

export default Avatar;