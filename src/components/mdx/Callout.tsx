import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
    type?: "default" | "warning" | "danger" | "success";
    title?: string;
    children: React.ReactNode;
}

const icons = {
    default: Info,
    warning: AlertCircle,
    danger: XCircle,
    success: CheckCircle,
};

export function Callout({
    type = "default",
    title,
    children,
}: CalloutProps) {
    const Icon = icons[type as keyof typeof icons] || icons.default;

    return (
        <div
            className={cn(
                "my-6 flex items-start rounded-md border p-4",
                {
                    "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800/50 dark:bg-blue-950/40 dark:text-blue-200": type === "default",
                    "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800/50 dark:bg-amber-950/40 dark:text-amber-200": type === "warning",
                    "border-red-200 bg-red-50 text-red-900 dark:border-red-800/50 dark:bg-red-950/40 dark:text-red-200": type === "danger",
                    "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800/50 dark:bg-emerald-950/40 dark:text-emerald-200": type === "success",
                }
            )}
        >
            <Icon className="h-5 w-5 mr-3 mt-0.5 shrink-0" />
            <div className="text-sm [&>p]:leading-relaxed [&>p]:m-0">
                {title && <div className="font-semibold mb-1">{title}</div>}
                {children}
            </div>
        </div>
    );
}
