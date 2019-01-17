import { MDXProvider } from "@mdx-js/tag";

import Section from "../ui/section";
import Wrapper from "../ui/wrapper";
import Navigation from "../navigation";

import components from "../ui";

function Blog({ children }) {
  return (
    <Section id="blog" style={{ paddingTop: 0 }}>
      <Navigation />
      <Wrapper>
        <MDXProvider components={components}>
          <article className="content">{children}</article>
        </MDXProvider>
      </Wrapper>

      <style jsx global>{`
        #blog {
          min-height: 100vh;
        }
      `}</style>

      <style jsx>{`
        .content {
          font-size: 1.25rem;
          margin: 0 auto 10vh;
          width: 100%;
        }
        .content :global(h1) {
          text-align: left;
          font-weight: 600;
        }
        article {
          box-sizing: border-box;
          font-weight: normal;
          line-height: 1.4;
          outline: 0;
          word-break: break-word;
          word-wrap: break-word;
          text-align: justify;
          hyphens: auto;
        }
        .content :global(h1),
        .content :global(h2),
        .content :global(h3),
        .content :global(h4),
        .content :global(h5),
        .content :global(h6) {
          font-weight: normal;
          letter-spacing: -0.02em;
          margin: 1em 0 0;
          position: relative;
        }
        .content :global(h2) {
          border-bottom: 1px solid black;
          box-sizing: border-box;
          margin-left: calc(-1em + 2px);
          margin-right: calc(-1em + 2px);
          padding: 0 1em 0.25em;
        }
        .content :global(hr) {
          margin: 2em auto;
          width: 33%;
        }
        @media (max-width: 767px) {
          .content :global(h1) {
            font-size: 2em;
            margin-left: -2px;
            line-height: 1.04;
            letter-spacing: -0.028em;
            text-align: left;
          }
          .content :global(*:hover > .anchor::before) {
            display: none;
          }
          .content :global(h2) {
            font-size: 1.75em;
            margin-top: 1.75rem;
            box-sizing: border-box;
            padding-left: 0.5714285714em;
            padding-right: 0.5714285714em;
            margin-left: -0.5714285714em;
            margin-right: -0.5714285714em;
          }
          .content :global(h3) {
            font-size: 1.5em;
          }
          .content :global(h4) {
            font-size: 1.25em;
          }
          .content :global(h5) {
            font-size: 1.125em;
          }
          .content :global(h6) {
            font-size: 1em;
          }
          .content :global(blockquote) {
            font-size: 1.125rem;
            line-height: 1.58;
            letter-spacing: -0.004em;
            padding-left: 17px;
            margin-left: -20px;
          }
          .content :global(p) {
            font-size: 1.125rem;
            line-height: 1.58;
            letter-spacing: -0.004em;
          }
          .content :global(pre) {
            border-left: none;
            border-right: none;
            padding: 1rem 1.25rem;
            margin: 1rem -1.25rem;
          }
          .content :global(ul),
          .content :global(ol) {
            margin-left: 0;
            padding-left: 2rem;
          }
          .content :global(.embed-responsive) {
            margin: 0 -1.25rem;
          }
        }
      `}</style>
    </Section>
  );
}

export default Blog;
