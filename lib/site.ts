/**
 * Central site / contact configuration.
 * 👉 Replace the placeholder values below with your real details.
 */
export const site = {
    name: 'Stellar Reach Solutions',
    url: 'https://stellar-reach-solutions.com',
    email: 'georgiougt94@icloud.com',

    // Phone in international format, digits only (used for WhatsApp + tel: links).
    phone: '35799717717',
    /**
     * The ONE display form of the phone number.
     *
     * This is a NAP field: search engines cross-reference name/address/phone
     * across the web, and two spellings of the same number on one site weakens
     * the local listing. Every visible phone number on the site must come from
     * here — never hardcode it in a component.
     */
    phoneDisplay: '+357 99 717717',

    // Optional: a Calendly / Cal.com booking link. Leave empty to fall back to contact form.
    bookingUrl: '',

    socials: {
        github: 'https://github.com/georgiougt',
        linkedin: '#',
        instagram: '#',
    },
} as const;

/** `tel:` href built from the canonical number. */
export const phoneHref = `tel:+${site.phone}`;

/** Pre-filled WhatsApp deep link. */
export const whatsappLink = `https://wa.me/${site.phone}?text=${encodeURIComponent(
    "Hi Stellar Reach Solutions, I'd like to talk about a website project."
)}`;
