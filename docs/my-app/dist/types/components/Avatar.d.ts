import React from 'react';
export interface AvatarProps {
    src?: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}
declare function Avatar({ src, alt, size, className }: AvatarProps): React.JSX.Element;
export default Avatar;
