"use client";

import Card from '@/components/ui/Card';
import { ACTIVITY_DATA, LANGUAGES_DATA as MOCK_LANGUAGES } from '@/data/coding-stats';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CodingActivity() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Fetch real language stats
    const { data: realLanguages, isLoading } = useSWR('/api/languages', fetcher);

    // Fallback to mock if loading or error (though API returns mock on error usually)
    const languagesData = realLanguages || MOCK_LANGUAGES;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Skeleton loading state */}
                <Card className="p-8 h-[400px] animate-pulse bg-neutral-100 dark:bg-neutral-900 border-none" />
                <Card className="p-8 h-[400px] animate-pulse bg-neutral-100 dark:bg-neutral-900 border-none" />
            </div>
        );
    }

    const isDark = theme === 'dark';

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Languages Chart */}
            <Card className="p-8 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Most Used Languages</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                        Automatically fetched from GitHub repositories.
                    </p>
                </div>

                <div className="h-[250px] w-full relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={languagesData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                                stroke="none"
                            >
                                {languagesData.map((entry: any, index: number) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: isDark ? '#171717' : '#ffffff',
                                    borderColor: isDark ? '#262626' : '#e5e5e5',
                                    borderRadius: '8px',
                                    color: isDark ? '#ffffff' : '#000000'
                                }}
                                itemStyle={{ color: isDark ? '#ffffff' : '#000000' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center">
                            <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                                {languagesData.length}
                            </span>
                            <p className="text-xs text-neutral-500 uppercase tracking-wider">Langs</p>
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-3 justify-center mt-4">
                    {languagesData.slice(0, 4).map((lang: any) => (
                        <div key={lang.name} className="flex items-center gap-2">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: lang.color }}
                            />
                            <span className="text-sm text-neutral-600 dark:text-neutral-300">
                                {lang.name}
                            </span>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Activity Chart (Manual/Mock) */}
            <Card className="p-8 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Weekly Coding Activity</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                        Estimated hours spent coding this week.
                    </p>
                </div>

                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={ACTIVITY_DATA}
                            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? '#333' : '#e5e5e5'} />
                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: isDark ? '#a3a3a3' : '#737373', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: isDark ? '#a3a3a3' : '#737373', fontSize: 12 }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: isDark ? '#171717' : '#ffffff',
                                    borderColor: isDark ? '#262626' : '#e5e5e5',
                                    borderRadius: '8px',
                                    color: isDark ? '#ffffff' : '#000000'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="hours"
                                stroke="#10B981"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorHours)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </Card>
        </div>
    );
}
