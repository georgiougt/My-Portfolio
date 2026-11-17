'use client';

import React, { useSyncExternalStore } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { site } from '@/lib/site';
import type { Locale } from '@/lib/i18n';

/**
 * Google Analytics 4 with Consent Mode v2.
 *
 * The privacy policy promises that analytics cookies are only set after the
 * visitor agrees, so consent defaults to "denied": the tag loads, but Google
 * stores no cookies and receives only cookieless pings until Accept is
 * clicked. A returning visitor who already accepted is granted straight away.
 * Advertising storage is always denied — this site runs no ad tags.
 *
 * Page views on client-side navigation are picked up by GA4's enhanced
 * measurement (history events), so no route listener is needed here.
 */
const STORAGE_KEY = 'srs-analytics-consent';
const CHANGE_EVENT = 'srs-analytics-consent-change';

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

/** Only real deployments report — local development never pollutes the data. */
const enabled = process.env.NODE_ENV === 'production' && Boolean(site.gaMeasurementId);

const bootstrap = `
window.dataLayer = window.dataLayer || [];
window.gtag = function(){ window.dataLayer.push(arguments); };
var consent = 'denied';
try { if (localStorage.getItem('${STORAGE_KEY}') === 'granted') consent = 'granted'; } catch (e) {}
window.gtag('consent', 'default', {
  analytics_storage: consent,
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
});
window.gtag('js', new Date());
window.gtag('config', '${site.gaMeasurementId}');
`;

function subscribe(callback: () => void) {
    window.addEventListener(CHANGE_EVENT, callback);
    window.addEventListener('storage', callback);
    return () => {
        window.removeEventListener(CHANGE_EVENT, callback);
        window.removeEventListener('storage', callback);
    };
}

/** 'granted' | 'denied' once answered, null while unanswered. */
function readChoice(): string | null {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch {
        // Storage blocked: treat as declined rather than nagging on every page.
        return 'denied';
    }
}

/** On the server the answer is unknown, so the banner is never in the HTML. */
const serverChoice = () => 'pending';

function setChoice(choice: 'granted' | 'denied') {
    try {
        localStorage.setItem(STORAGE_KEY, choice);
    } catch {
        // Nothing to persist to; the consent update below still applies now.
    }
    window.gtag?.('consent', 'update', { analytics_storage: choice });
    window.dispatchEvent(new Event(CHANGE_EVENT));
}

const copy = {
    en: {
        label: 'Analytics consent',
        text: 'We use Google Analytics to see how this site is used. Analytics cookies are only set if you accept.',
        policy: 'Privacy policy',
        accept: 'Accept',
        decline: 'Decline',
    },
    el: {
        label: 'Συγκατάθεση για στατιστικά',
        text: 'Χρησιμοποιούμε το Google Analytics για να βλέπουμε πώς χρησιμοποιείται ο ιστότοπος. Τα cookies στατιστικών ενεργοποιούνται μόνο αν τα αποδεχτείτε.',
        policy: 'Πολιτική απορρήτου',
        accept: 'Αποδοχή',
        decline: 'Απόρριψη',
    },
} as const;

export function Analytics({ locale }: { locale: Locale }) {
    const choice = useSyncExternalStore(subscribe, readChoice, serverChoice);

    if (!enabled) return null;

    const t = copy[locale];

    return (
        <>
            <Script id="ga-bootstrap" strategy="afterInteractive">
                {bootstrap}
            </Script>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${site.gaMeasurementId}`}
                strategy="afterInteractive"
            />

            {choice === null && (
                <div
                    role="dialog"
                    aria-label={t.label}
                    className="fixed bottom-4 left-4 right-24 z-50 rounded-2xl border border-border bg-card/95 p-5 shadow-2xl shadow-black/40 backdrop-blur sm:right-auto sm:max-w-sm"
                >
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        {t.text}{' '}
                        <Link href="/privacy" className="text-primary hover:underline">
                            {t.policy}
                        </Link>
                    </p>
                    <div className="mt-4 flex gap-3">
                        <button
                            type="button"
                            onClick={() => setChoice('granted')}
                            className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                            {t.accept}
                        </button>
                        <button
                            type="button"
                            onClick={() => setChoice('denied')}
                            className="flex-1 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
                        >
                            {t.decline}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

/**
 * Lets a visitor change their answer later, as the privacy policy says they
 * can. Clearing the stored answer withdraws consent and brings the banner back.
 */
export function AnalyticsConsentReset({ children }: { children: React.ReactNode }) {
    return (
        <button
            type="button"
            onClick={() => {
                try {
                    localStorage.removeItem(STORAGE_KEY);
                } catch {
                    // Storage blocked: there is no stored answer to clear.
                }
                window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
                window.dispatchEvent(new Event(CHANGE_EVENT));
            }}
            className="text-primary underline-offset-2 hover:underline"
        >
            {children}
        </button>
    );
}
