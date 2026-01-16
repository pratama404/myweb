"use client";

import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import Giscus from '@giscus/react';

export default function GuestbookPage() {
    return (
        <Container>
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-8 mt-8">
                <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Guestbook</h1>
                <p className="text-neutral-400">
                    Leave a message for me and other potential visitors.
                </p>

                {/* Location Map Section */}
                <Card className="w-full p-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">I'm Currently Based Here</h3>
                            <p className="text-sm text-neutral-400">Surabaya, East Java, Indonesia</p>
                        </div>
                        <div className="w-full h-[300px] rounded-xl overflow-hidden border border-neutral-800 relative bg-neutral-900">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Surabaya Map"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Surabaya&t=&z=13&ie=UTF8&iwloc=B&output=embed"
                                className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-300 contrast-125 opacity-80 hover:opacity-100"
                            ></iframe>
                        </div>
                    </div>
                </Card>

                {/* Giscus Comments Section */}
                <Card className="w-full p-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">Sign the Guestbook</h3>
                            <p className="text-sm text-neutral-400">Share your thoughts, suggestions, or just say hello.</p>
                        </div>
                        <div className="w-full">
                            <Giscus
                                id="comments"
                                repo="pratama404/myweb"
                                repoId="R_kgDONVDorQ"
                                category="General"
                                categoryId="DIC_kwDONVDorc4ClA4d"
                                mapping="pathname"
                                term="Welcome to my guestbook!"
                                reactionsEnabled="1"
                                emitMetadata="0"
                                inputPosition="top"
                                theme="dark"
                                lang="en"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </Container>
    );
}
