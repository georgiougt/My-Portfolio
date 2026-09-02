import React from 'react';
import { Reveal } from '@/components/effects/Reveal';
import { Plus } from 'lucide-react';

const faqs = [
    {
        question: 'How much does a website cost?',
        answer:
            'It depends on the size and complexity of your project. Simple business sites start lower, while custom web apps cost more. We always agree on a clear, fixed price up front — no surprises. See our Pricing page for typical packages, or get in touch for a tailored quote.',
    },
    {
        question: 'How long does it take to build a website?',
        answer:
            'Most business websites take 2–4 weeks from kickoff to launch, depending on scope and how quickly we receive your content and feedback. Larger platforms and web apps take longer — we give you a realistic timeline before we start.',
    },
    {
        question: 'Will my website work on mobile phones?',
        answer:
            'Absolutely. Every site we build is mobile-first and fully responsive, so it looks and works perfectly on phones, tablets and desktops. The majority of your visitors will be on mobile, so we design for that from the start.',
    },
    {
        question: 'Do you handle SEO so people can find my site on Google?',
        answer:
            'Yes. Every site ships with solid SEO foundations — fast load times, clean code, proper page titles, descriptions and structured data, plus a sitemap. For local businesses we also optimise for local search so nearby customers can find you.',
    },
    {
        question: 'Who owns the website once it is finished?',
        answer:
            'You do — 100%. Once the project is complete and paid for, the website and its code are yours. We can also help with hosting, domains and ongoing maintenance if you want us to.',
    },
    {
        question: 'Do you offer support after launch?',
        answer:
            'Yes. We don&apos;t disappear after launch. We offer ongoing support, updates and improvements so your site keeps performing and growing with your business.',
    },
];

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer.replace(/&apos;/g, "'"),
        },
    })),
};

export function FAQ() {
    return (
        <section id="faq" className="relative z-10 bg-transparent py-24 sm:py-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <div className="container mx-auto px-4">
                <Reveal className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        FAQ
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        Questions, answered
                    </h2>
                    <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                        Everything you might want to know before getting started.
                    </p>
                </Reveal>

                <Reveal className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                    {faqs.map((faq) => (
                        <details key={faq.question} className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                                <span>{faq.question}</span>
                                <Plus className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45" />
                            </summary>
                            <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                                {faq.answer.replace(/&apos;/g, "'")}
                            </div>
                        </details>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
