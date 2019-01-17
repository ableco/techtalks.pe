import blog from "../components/layout/blog";

export default function layout(kind) {
  switch (kind) {
    case "blog": {
      return blog;
    }
    default: {
      return null;
    }
  }
}
