import {
    createContext,
    forwardRef,
    useContext,
    useId,
    type ChangeEvent,
    type ChangeEventHandler,
    type ComponentPropsWithoutRef,
    type ElementRef,
    type HTMLAttributes,
    type ReactNode,
} from "react";
import { useForm } from "@inertiajs/react";
import { twMerge } from "tailwind-merge";

import { Label } from "@/components/ui/label";
interface FormControlContext {
    inputId: string;
    error?: string;
}

const FormControlContext = createContext<FormControlContext | null>(null);

function useFormControl() {
    const context = useContext(FormControlContext);
    if (!context) {
        throw new Error("useForm must be used within a FormControl component");
    }

    return context;
}

interface FormControlProps<TForm extends object>
    extends HTMLAttributes<HTMLDivElement> {
    form: ReturnType<typeof useForm<TForm>>;
    name: keyof ReturnType<typeof useForm<TForm>>["data"];
    render: (field: {
        id: string;
        invalid?: boolean;
        onChange: ChangeEventHandler<HTMLInputElement>;
    }) => ReactNode;
}

export const FormControl = forwardRef<HTMLDivElement, FormControlProps<any>>(
    function FormControl({ name, form, render, ...props }, ref) {
        const inputId = useId();

        const error = form.errors[name];

        function handleChange(event: ChangeEvent<HTMLInputElement>) {
            form.setData(name, event.target.value);
        }

        return (
            <FormControlContext.Provider value={{ inputId, error }}>
                <div ref={ref} {...props}>
                    {render({
                        id: inputId,
                        invalid: !!error,
                        onChange: handleChange,
                    })}
                </div>
            </FormControlContext.Provider>
        );
    }
) as <TForm extends object>(props: FormControlProps<TForm>) => ReactNode | null;

export const FormLabel = forwardRef<
    ElementRef<typeof Label>,
    ComponentPropsWithoutRef<typeof Label>
>(function FormLabel(props, ref) {
    const { inputId } = useFormControl();

    return <Label ref={ref} htmlFor={inputId} {...props} />;
});

export const FormMessage = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(function FormMessage({ className, ...props }, ref) {
    const { error } = useFormControl();

    if (!error) return null;

    return (
        <p
            ref={ref}
            className={twMerge("text-xs mt-1.5 text-destructive", className)}
            {...props}
        >
            {error}
        </p>
    );
});
