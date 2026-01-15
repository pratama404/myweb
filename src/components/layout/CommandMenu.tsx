"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Loader2, Search, FileText, Home, User, Briefcase, Mail, Github, Twitter, Linkedin, LayoutGrid } from "lucide-react";

export default function CommandMenu() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-200 ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            <div className="w-full max-w-lg bg-white dark:bg-[#111111] border border-neutral-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-200 scale-95 data-[state=open]:scale-100">
                <Command label="Command Menu" className="w-full">
                    <div className="flex items-center border-b border-neutral-200 dark:border-white/5 px-4">
                        <Search className="mr-2 h-5 w-5 shrink-0 opacity-50 text-neutral-500 dark:text-white" />
                        <Command.Input
                            placeholder="Type a command or search..."
                            className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 text-neutral-900 dark:text-white disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 text-neutral-900 dark:text-white scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-white/10">
                        <Command.Empty className="py-6 text-center text-sm text-neutral-500">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-neutral-500 select-none">
                            <CommandItem icon={<Home />} onSelect={() => runCommand(() => router.push('/'))}>
                                Home
                            </CommandItem>
                            <CommandItem icon={<User />} onSelect={() => runCommand(() => router.push('/about'))}>
                                About
                            </CommandItem>
                            <CommandItem icon={<Briefcase />} onSelect={() => runCommand(() => router.push('/projects'))}>
                                Projects
                            </CommandItem>
                            <CommandItem icon={<LayoutGrid />} onSelect={() => runCommand(() => router.push('/products'))}>
                                Products
                            </CommandItem>
                            <CommandItem icon={<FileText />} onSelect={() => runCommand(() => router.push('/blog'))}>
                                Blog
                            </CommandItem>
                        </Command.Group>

                        <Command.Separator className="my-1 h-px bg-neutral-200 dark:bg-white/5" />

                        <Command.Group heading="Social" className="px-2 py-1.5 text-xs font-medium text-neutral-500 select-none">
                            <CommandItem icon={<Github />} onSelect={() => runCommand(() => window.open('https://github.com/pratama404', '_blank'))}>
                                GitHub
                            </CommandItem>
                            <CommandItem icon={<Twitter />} onSelect={() => runCommand(() => window.open('https://twitter.com/agengptr_', '_blank'))}>
                                Twitter
                            </CommandItem>
                            <CommandItem icon={<Linkedin />} onSelect={() => runCommand(() => window.open('https://linkedin.com/in/agengputrapratama/', '_blank'))}>
                                LinkedIn
                            </CommandItem>
                            <CommandItem icon={<Mail />} onSelect={() => runCommand(() => window.open('mailto:ageng@example.com', '_blank'))}>
                                Contact
                            </CommandItem>
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
        </div>
    );
}

function CommandItem({ children, icon, onSelect }: { children: React.ReactNode, icon: any, onSelect: () => void }) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex select-none items-center rounded-md px-2 py-2 text-sm outline-none aria-selected:bg-neutral-100 dark:aria-selected:bg-white/10 aria-selected:text-neutral-900 dark:aria-selected:text-white cursor-pointer transition-colors text-neutral-600 dark:text-neutral-300 group"
        >
            {React.cloneElement(icon, { className: "mr-2 h-4 w-4 opacity-70 group-hover:opacity-100" })}
            <span>{children}</span>
        </Command.Item>
    );
}
