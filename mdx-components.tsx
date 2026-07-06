import type { MDXComponents } from "mdx/types";

// Essay typography is handled by the .prose-letter wrapper in globals.css.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // essay images live below the fold and hotlink Substack's CDN
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img loading="lazy" decoding="async" alt={props.alt ?? ""} {...props} />
    ),
    ...components,
  };
}
