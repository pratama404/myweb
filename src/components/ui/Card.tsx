import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function Card({ children, className, style }: CardProps) {
    return (
        <div
            className={cn(
                'relative rounded-2xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden',
                className
            )}
            style={style}
        >
            {children}
        </div>
    );
}
