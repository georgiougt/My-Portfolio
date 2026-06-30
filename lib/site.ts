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
    // Pretty version shown to users.
    phoneDisplay: '+357 99 717 717',

    // Optional: a Calendly / Cal.com booking link. Leave empty to fall back to contact form.
    bookingUrl: '',

    socials: {
        github: 'https://github.com/georgiougt',
        linkedin: '#',
        instagram: '#',
    },
} as const;

/** Pre-filled WhatsApp deep link. */
export const whatsappLink = `https://wa.me/${site.phone}?text=${encodeURIComponent(
    "Hi Stellar Reach Solutions, I'd like to talk about a website project."
)}`;
