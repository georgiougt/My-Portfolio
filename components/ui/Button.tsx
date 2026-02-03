import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        const variants = {
            primary: 'bg-primary text-white hover:brightness-110 shadow-lg shadow-primary/20',
            secondary: 'bg-secondary text-white hover:brightness-110 shadow-lg shadow-secondary/20',
            outline: 'border-2 border-primary text-primary hover:bg-primary/10',
            ghost: 'hover:bg-white/10 text-foreground',
            gradient: 'bg-gradient-brand text-white hover:brightness-110 shadow-lg shadow-purple-500/20 border-none',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-11 px-8 text-base',
            lg: 'h-14 px-10 text-lg',
            icon: 'h-10 w-10 p-2',
        };

        return (
            <Comp
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-95',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
