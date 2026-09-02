import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export type Crumb = { name: string; path: string };

/**
 * Visible breadcrumb trail. Pair it with breadcrumbSchema() from lib/seo —
 * Google wants the markup and the on-page trail to match, and the visible
 * version is also a genuine internal-linking win on deep pages.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
    return (
        <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
                {items.map((item, i) => {
                    const isLast = i === items.length - 1;
                    return (
                        <li key={item.path} className="flex items-center gap-1">
                            {isLast ? (
                                <span aria-current="page" className="text-foreground">
                                    {item.name}
                                </span>
                            ) : (
                                <>
                                    <Link
                                        href={item.path}
                                        className="transition-colors hover:text-primary"
                                    >
                                        {item.name}
                                    </Link>
                                    <ChevronRight
                                        aria-hidden="true"
                                        className="h-3 w-3 shrink-0 opacity-50"
                                    />
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
