import { clsx, type ClassValue } from "clsx";
import type { FormEvent } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function submitForm(callback: (event: FormEvent<HTMLFormElement>) => void) {
    return (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        callback(event);
    };
}
