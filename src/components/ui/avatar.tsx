import * as React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  fallbackText?: string;
}

export function Avatar({
  className,
  src,
  alt = "User Avatar",
  fallbackText = "U",
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border bg-muted items-center justify-center font-medium text-muted-foreground select-none",
        className
      )}
      {...props}
    >
      {src && !imageError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <span className="text-xs font-semibold uppercase">{fallbackText.slice(0, 2)}</span>
      )}
    </div>
  );
}
