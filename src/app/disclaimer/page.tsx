import Container from '@/components/layout/Container';

export default function DisclaimerPage() {
    return (
        <Container className="mt-24 mb-24">
            <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>
            <div className="prose dark:prose-invert">
                <h3 className="text-xl font-bold mt-8 mb-4">Website Disclaimer</h3>
                <ul className="list-disc pl-6 space-y-4">
                    <li>
                        The views expressed on this site are my own and do not reflect those of any individual or entity with which I have been or am currently affiliated with.
                    </li>
                    <li>
                        Any mention of any individuals or entities on this site is not an endorsement of said individual or entity.
                    </li>
                    <li>
                        Any site content may be modified, removed, or otherwise altered without notice.
                    </li>
                    <li>
                        Opinions expressed in a blog post may have changed since its date of publication.
                    </li>
                </ul>
            </div>
        </Container>
    );
}
