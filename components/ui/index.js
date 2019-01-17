import Link from "next/link";
import { blue } from "@sergiodxa/palette";

import { H1, H2, H3, H4, H5, H6 } from "@sergiodxa/ui/lib/headings";
import { Image, Figure, FigCaption } from "@sergiodxa/ui/lib/images";
import { UL, OL, LI, DL, DT, DD } from "@sergiodxa/ui/lib/list";
import { Pre, Code } from "@sergiodxa/ui/lib/code";
import { A, P, BlockQuote, Abbr, Mark } from "@sergiodxa/ui/lib/text";
import {
  Table,
  TH,
  TR,
  TD,
  THead,
  TBody,
  TFoot
} from "@sergiodxa/ui/lib/table";

import FileTree from "./file-tree";

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  img: Image,
  figure: Figure,
  figcaption: FigCaption,
  ul: UL,
  ol: OL,
  li: LI,
  dl: DL,
  dt: DT,
  dd: DD,
  code: props => {
    switch (props.className) {
      case "language-file-tree": {
        return <FileTree {...props} />;
      }
      default: {
        return <Code {...props} />;
      }
    }
  },
  pre: props => {
    if (props.children.props.props.className === "language-file-tree")
      return props.children;
    return <Pre {...props} />;
  },
  inlineCode: Code,
  a: props => {
    if (props.href.startsWith("/") && !props.href.startsWith("//")) {
      return (
        <Link href={props.href} prefetch>
          <A {...props} color={blue} decoration="underline" />
        </Link>
      );
    }
    return <A {...props} color={blue} decoration="underline" />;
  },
  p: P,
  blockquote: BlockQuote,
  abbr: Abbr,
  mark: Mark,
  table: Table,
  th: TH,
  tr: TR,
  td: TD,
  thead: THead,
  tbody: TBody,
  tfoot: TFoot
};
