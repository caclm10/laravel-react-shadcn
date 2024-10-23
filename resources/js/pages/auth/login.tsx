import { LoginCardForm } from "@/components/auth/login-card-form";
import { AuthLayout } from "@/layouts/auth-layout";
import { Head } from "@inertiajs/react";
import type { ReactNode } from "react";

export default function LoginPage() {
    return (
        <>
            <Head title="Login" />

            <LoginCardForm />
        </>
    );
}

LoginPage.layout = (page: ReactNode) => {
    return <AuthLayout>{page}</AuthLayout>;
};
