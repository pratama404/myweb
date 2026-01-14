declare module 'reading-time' {
    export interface ReadingTimeResult {
        text: string;
        minutes: number;
        time: number;
        words: number;
    }
    export default function readingTime(text: string): ReadingTimeResult;
}
