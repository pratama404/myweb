import Image from "next/image";
import { cn } from "@/lib/utils";

interface MDXImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    caption?: string;
}

export function MDXImage({
    src,
    alt,
    width = 1200,
    height = 630,
    className,
    caption,
}: MDXImageProps) {
    return (
        <figure className={cn("my-8 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900", className)}>
            <div className="relative aspect-video w-full">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="object-cover w-full h-full"
                />
            </div>
            {caption && (
                <figcaption className="p-3 text-center text-sm text-neutral-500 dark:text-neutral-400 font-mono border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
