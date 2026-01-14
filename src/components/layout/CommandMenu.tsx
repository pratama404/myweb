"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Loader2, Search, FileText, Home, User, Briefcase, Mail } from "lucide-react";

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
            <div className="w-full max-w-lg bg-[#111111] border border-white/10 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-200 scale-95 data-[state=open]:scale-100">
                <Command label="Command Menu" className="w-full">
                    <div className="flex items-center border-b border-white/5 px-4">
                        <Search className="mr-2 h-5 w-5 shrink-0 opacity-50 text-white" />
                        <Command.Input
                            placeholder="Type a command or search..."
                            className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 text-white disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 text-white scrollbar-thin scrollbar-thumb-white/10">
                        <Command.Empty className="py-6 text-center text-sm text-neutral-500">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="General" className="px-2 py-1.5 text-xs font-medium text-neutral-500">
                            <Command.Item onSelect={() => runCommand(() => router.push('/'))} className="flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors text-neutral-300">
                                <Home className="mr-2 h-4 w-4" />
                                <span>Home</span>
                            </Command.Item>
                            <Command.Item onSelect={() => runCommand(() => router.push('/about'))} className="flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors text-neutral-300">
                                <User className="mr-2 h-4 w-4" />
                                <span>About</span>
                            </Command.Item>
                            <Command.Item onSelect={() => runCommand(() => router.push('/projects'))} className="flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors text-neutral-300">
                                <Briefcase className="mr-2 h-4 w-4" />
                                <span>Projects</span>
                            </Command.Item>
                            <Command.Item onSelect={() => runCommand(() => router.push('/blog'))} className="flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors text-neutral-300">
                                <FileText className="mr-2 h-4 w-4" />
                                <span>Blog</span>
                            </Command.Item>
                        </Command.Group>

                        <Command.Separator className="my-1 h-px bg-white/5" />

                        <Command.Group heading="Social" className="px-2 py-1.5 text-xs font-medium text-neutral-500">
                            <Command.Item onSelect={() => runCommand(() => window.open('https://linkedin.com/in/agengputrapratama/', '_blank'))} className="flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors text-neutral-300">
                                <User className="mr-2 h-4 w-4" />
                                <span>LinkedIn</span>
                            </Command.Item>
                            <Command.Item onSelect={() => runCommand(() => window.open('mailto:ageng@example.com', '_blank'))} className="flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-white/10 aria-selected:text-white cursor-pointer transition-colors text-neutral-300">
                                <Mail className="mr-2 h-4 w-4" />
                                <span>Contact</span>
                            </Command.Item>
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
        </div>
    );
}
