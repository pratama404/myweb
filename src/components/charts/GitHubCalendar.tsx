"use client";

import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import Card from '@/components/ui/Card';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import React, { useEffect, useState } from 'react';

export default function GitHubCalendarComponent() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Card className="p-8 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 overflow-hidden min-h-[300px]">
                <div className="flex flex-col gap-6 animate-pulse">
                    <div>
                        <div className="h-7 w-48 bg-neutral-200 dark:bg-neutral-800 rounded mb-2"></div>
                        <div className="h-4 w-64 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                    </div>
                    <div className="h-32 w-full bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                </div>
            </Card>
        );
    }

    const isDark = (theme === 'dark' || resolvedTheme === 'dark');

    return (
        <Card className="p-8 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <div className="flex flex-col gap-6">
                <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Contribution History</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        My open source work and commits on GitHub.
                    </p>
                </div>

                <div className="flex justify-center w-full overflow-x-auto pb-2">
                    <GitHubCalendar
                        username="pratama404"
                        colorScheme={isDark ? 'dark' : 'light'}
                        blockSize={12}
                        blockMargin={4}
                        fontSize={12}
                        theme={{
                            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                        }}

                        renderBlock={(block, activity) =>
                            React.cloneElement(block, {
                                'data-tooltip-id': 'github-tooltip',
                                'data-tooltip-content': `${activity.count} activities on ${activity.date}`,
                            } as any)
                        }
                    />
                    <ReactTooltip id="github-tooltip" style={{ fontSize: "12px", backgroundColor: "#333" }} />
                </div>
            </div>
        </Card>
    );
}
