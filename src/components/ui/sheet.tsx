"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SheetCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children?: React.ReactNode;
}

export const SheetClose = React.forwardRef<HTMLButtonElement, SheetCloseProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      // For asChild, we'll just render the children directly
      return <>{children}</>;
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SheetClose.displayName = "SheetClose";
