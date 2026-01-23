import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaSpotify, FaFacebook, FaBlogger, FaThreads, FaEnvelope } from 'react-icons/fa6';
import { SiTiktok } from 'react-icons/si';

export const SOCIAL_LINKS = [
    {
        name: 'GitHub',
        handle: '@pratama404',
        href: 'https://github.com/pratama404',
        icon: FaGithub,
        color: 'hover:text-neutral-900 dark:hover:text-white'
    },
    {
        name: 'LinkedIn',
        handle: 'agengputrapratama',
        href: 'https://www.linkedin.com/in/agengputrapratama',
        icon: FaLinkedin,
        color: 'hover:text-blue-600'
    },
    {
        name: 'Instagram',
        handle: '@agengputrapratama',
        href: 'https://www.instagram.com/agengputrapratama/',
        icon: FaInstagram,
        color: 'hover:text-pink-600'
    },
    {
        name: 'Threads',
        handle: '@agengputrapratama',
        href: 'https://www.threads.net/@agengputrapratama',
        icon: FaThreads,
        color: 'hover:text-black dark:hover:text-white'
    },
    {
        name: 'YouTube',
        handle: '@agengputrapratama',
        href: 'https://www.youtube.com/agengputrapratama',
        icon: FaYoutube,
        color: 'hover:text-red-600'
    },
    {
        name: 'X (Twitter)',
        handle: '@jhnsmyth0',
        href: 'https://x.com/jhnsmyth0',
        icon: FaTwitter,
        color: 'hover:text-sky-500'
    },
    {
        name: 'TikTok',
        handle: '@agengputrapratamaa',
        href: 'http://tiktok.com/@agengputrapratamaa',
        icon: SiTiktok,
        color: 'hover:text-black dark:hover:text-white'
    },
    {
        name: 'Spotify',
        handle: 'Podcast',
        href: 'https://open.spotify.com/show/0iH3fOvAN8l9LFHQpXvRr0',
        icon: FaSpotify,
        color: 'hover:text-green-500'
    },
    {
        name: 'Facebook',
        handle: 'Ageng P. Pratama',
        href: 'https://www.facebook.com/ageng.p.pratama.7/',
        icon: FaFacebook,
        color: 'hover:text-blue-600'
    },
    {
        name: 'Blog',
        handle: 'Blogger',
        href: 'https://agengputrapratama.blogspot.com/',
        icon: FaBlogger,
        color: 'hover:text-orange-500'
    },
    {
        name: 'Email',
        handle: 'agengputrapratama@gmail.com',
        href: 'mailto:agengputrapratama@gmail.com',
        icon: FaEnvelope,
        color: 'hover:text-rose-500'
    }
];
