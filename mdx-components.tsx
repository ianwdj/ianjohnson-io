import type { MDXComponents } from "mdx/types";

// Essay typography is handled by the .prose-letter wrapper in globals.css;
// components here only need to exist for MDX to render inside the app router.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
