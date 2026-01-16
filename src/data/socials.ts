
import { Github, Linkedin, Twitter, Instagram, Youtube, Facebook, Mic, Globe, Mail } from 'lucide-react';

export const SOCIAL_LINKS = [
    {
        name: 'GitHub',
        handle: '@pratama404',
        href: 'https://github.com/pratama404',
        icon: Github,
        color: 'hover:text-neutral-900 dark:hover:text-white'
    },
    {
        name: 'LinkedIn',
        handle: 'agengputrapratama',
        href: 'https://www.linkedin.com/in/agengputrapratama',
        icon: Linkedin,
        color: 'hover:text-blue-600'
    },
    {
        name: 'Instagram',
        handle: '@agengputrapratama',
        href: 'https://www.instagram.com/agengputrapratama/',
        icon: Instagram,
        color: 'hover:text-pink-600'
    },
    {
        name: 'YouTube',
        handle: '@agengputrapratama',
        href: 'https://www.youtube.com/agengputrapratama',
        icon: Youtube,
        color: 'hover:text-red-600'
    },
    {
        name: 'X (Twitter)',
        handle: '@jhnsmyth0',
        href: 'https://x.com/jhnsmyth0',
        icon: Twitter,
        color: 'hover:text-sky-500'
    },
    {
        name: 'TikTok',
        handle: '@agengputrapratamaa',
        href: 'http://tiktok.com/@agengputrapratamaa',
        icon: Globe, // TikTok icon not in standard Lucide set yet, generic fallback or custom needed. Using Globe for now.
        color: 'hover:text-black dark:hover:text-white'
    },
    {
        name: 'Spotify',
        handle: 'Podcast',
        href: 'https://open.spotify.com/show/0iH3fOvAN8l9LFHQpXvRr0',
        icon: Mic,
        color: 'hover:text-green-500'
    },
    {
        name: 'Facebook',
        handle: 'Ageng P. Pratama',
        href: 'https://www.facebook.com/ageng.p.pratama.7/',
        icon: Facebook,
        color: 'hover:text-blue-600'
    },
    {
        name: 'Blog',
        handle: 'Blogger',
        href: 'https://agengputrapratama.blogspot.com/',
        icon: Globe,
        color: 'hover:text-orange-500'
    },
    {
        name: 'Email',
        handle: 'agengputrapratama@gmail.com',
        href: 'mailto:agengputrapratama@gmail.com',
        icon: Mail,
        color: 'hover:text-rose-500'
    }
];
