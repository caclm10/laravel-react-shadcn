import { useForm } from "@inertiajs/react";

import { submitForm } from "@/lib/utils";
import { ButtonLoader } from "@/components/custom/button";
import { FormControl, FormLabel, FormMessage } from "@/components/custom/form";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Inputs {
    email: string;
    password: string;
}

export function LoginCardForm() {
    const form = useForm<Inputs>({ email: "", password: "" });

    const handleSubmit = submitForm(() => {
        form.post("/login");
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Login to your account.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <div className="space-y-4">
                        <FormControl
                            form={form}
                            name="email"
                            render={(field) => (
                                <>
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                        placeholder="youremail@example.com"
                                        {...field}
                                    />
                                    <FormMessage />
                                </>
                            )}
                        />
                        <FormControl
                            form={form}
                            name="password"
                            render={(field) => (
                                <>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        placeholder="••••••••••"
                                        {...field}
                                    />
                                    <FormMessage />
                                </>
                            )}
                        />
                    </div>
                </CardContent>

                <CardFooter>
                    <Button loading={form.processing}>
                        <ButtonLoader />
                        Submit
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
