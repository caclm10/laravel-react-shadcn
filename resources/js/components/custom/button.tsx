import {
    forwardRef,
    type ComponentPropsWithoutRef,
    type ElementRef,
} from "react";
import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ButtonLoaderProps
    extends ComponentPropsWithoutRef<typeof Loader2Icon> {}

export const ButtonLoader = forwardRef<
    ElementRef<typeof Loader2Icon>,
    ButtonLoaderProps
>(function ButtonLoader({ className, ...props }, ref) {
    return (
        <Loader2Icon
            ref={ref}
            className={cn(
                "size-4 animate-spin hidden group-data-[loading=true]/button:block",
                className
            )}
            {...props}
        />
    );
});
