import Container from '@/components/layout/Container';
import Link from 'next/link';

export default function NotFound() {
    return (
        <Container>
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8">
                <div className="relative">
                    <div className="text-9xl font-black text-neutral-200 dark:text-neutral-800 select-none">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500 animate-pulse">
                            SYSTEM MALFUNCTION
                        </div>
                    </div>
                </div>

                <div className="space-y-4 max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                        Lost in the digital void?
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        The coordinates you provided lead to uncharted territory. The signal is lost.
                    </p>
                </div>

                <Link
                    href="/"
                    className="px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:scale-105 active:scale-95 transition-transform"
                >
                    Return to Base
                </Link>
            </div>
        </Container>
    );
}
