import type { ReactNode } from "react";

interface AuthLayoutProps {
    children?: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-dvh">
            <div className="container py-12 max-w-lg">{children}</div>
        </div>
    );
}
