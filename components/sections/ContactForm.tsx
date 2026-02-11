'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface ContactFormProps {
    className?: string;
    showCard?: boolean;
}

export function ContactForm({ className = '', showCard = true }: ContactFormProps) {
    const FormContent = (
        <form className={`space-y-6 ${className}`} action="https://formspree.io/f/maqbkqzg" method="POST">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-md border border-border bg-background/50 px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-md border border-border bg-background/50 px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full rounded-md border border-border bg-background/50 px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none transition-all"
                />
            </div>
            <Button type="submit" size="lg" className="w-full" variant="gradient">
                Send Message
            </Button>
        </form>
    );

    if (showCard) {
        return <Card className="p-8">{FormContent}</Card>;
    }

    return FormContent;
}
