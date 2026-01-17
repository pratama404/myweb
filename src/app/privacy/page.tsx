import Container from '@/components/layout/Container';

export default function PrivacyPage() {
    return (
        <Container className="mt-24 mb-24">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose dark:prose-invert">
                <p className="mb-8 text-neutral-600 dark:text-neutral-400">Last updated: {new Date().getFullYear()}</p>

                <h3 className="text-xl font-bold mt-8 mb-4">Website Privacy Policy</h3>
                <p className="mb-4">
                    This website was created with <strong>Next.js 15</strong> and <strong>React</strong>. It does not use cookies of any kind for tracking purposes.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>
                        <strong>Local Storage:</strong> This site uses <code>localStorage</code> solely for the purpose of switching between light and dark themes for UI/UX. This happens entirely on the client side with no interaction with the server.
                    </li>
                    <li>
                        <strong>No Forms:</strong> There are no forms or other mechanisms that process personal data, except for the optional Guestbook (powered by Giscus).
                    </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">Hosting & Data</h3>
                <p className="mb-4">
                    This Website is hosted on <strong>Vercel</strong>. Vercel may collect user personal information from visitors, including logs of visitor IP addresses, to comply with legal obligations and to maintain the security and integrity of the website.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>
                        See the <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline">Vercel Privacy Policy</a> for details.
                    </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">External Links</h3>
                <p className="mb-4">
                    All external links open in a new tab. I do not use an anonymizing service, so you will know exactly where the link will take you.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>
                        <strong>Security:</strong> I use the <code>rel="noopener noreferrer"</code> attribute on external links, which prevents the opening page from gaining access to the original page.
                    </li>
                    <li>
                        If you spot a link missing this attribute, let me know and I’ll update it ASAP.
                    </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">Analytics</h3>
                <p className="mb-8">
                    I will never add user tracking/analytics of any type because I simply do not care about "vanity metrics." This site exists for my personal satisfaction and to share knowledge. Apart from server logs maintained by Vercel for security, no data is collected, stored, or evaluated.
                </p>

                <hr className="my-8 border-neutral-200 dark:border-neutral-800" />

                <h3 className="text-xl font-bold mt-8 mb-4">References & Documentation</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 hover:underline">
                            MDN Web Docs: Web Storage API & Local Storage
                        </a>
                    </li>
                    <li>
                        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 hover:underline">
                            Vercel Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 hover:underline">
                            MDN Web Docs: Link types (noopener, noreferrer)
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    );
}
