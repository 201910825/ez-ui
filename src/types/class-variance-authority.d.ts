declare module 'class-variance-authority' {
    export function cva(base: string, options?: {
        variants?: Record<string, Record<string, string>>;
        defaultVariants?: Record<string, string>;
    }): {
        (props?: Record<string, string>): string;
        variants: Record<string, Record<string, string>>;
        defaultVariants: Record<string, string>;
    };
    export type VariantProps<T> = T extends { variants: infer V }
        ? { [K in keyof V]?: keyof V[K] }
        : {};
}