import { FormControl, FormLabel, FormMessage } from "@/components/custom/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitForm } from "@/lib/utils";
import { useForm } from "@inertiajs/react";

interface Inputs {
    email: string;
    password: string;
}

export function LoginForm() {
    const form = useForm<Inputs>({ email: "", password: "" });

    const handleSubmit = submitForm(() => {
        console.log(form.data);
    });

    return (
        <form onSubmit={handleSubmit}>
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

            <div className="mt-6">
                <Button disabled={form.processing}>Submit</Button>
            </div>
        </form>
    );
}
