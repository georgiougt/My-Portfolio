/**
 * Eased scroll to an element by id — smoother and more controlled than the
 * browser's instant anchor jump. Offsets for the fixed navbar and falls back to
 * an instant jump for users who prefer reduced motion.
 */
export function smoothScrollToId(id: string, offset = 72, duration = 900) {
    const target = document.getElementById(id);
    if (!target) return;

    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + window.scrollY - offset;
    animateScroll(startY, endY, duration);
}

/** Eased scroll back to the top of the page (e.g. the Home / brand link). */
export function smoothScrollToTop(duration = 900) {
    animateScroll(window.scrollY, 0, duration);
}

function animateScroll(startY: number, endY: number, duration: number) {
    const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduceMotion) {
        window.scrollTo(0, endY);
        return;
    }

    const distance = endY - startY;
    const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let startTime: number | undefined;
    const step = (now: number) => {
        if (startTime === undefined) startTime = now;
        const progress = Math.min((now - startTime) / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}
