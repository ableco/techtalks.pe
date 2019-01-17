import Blog from "../components/layout/blog";

function getLayout(kind) {
  switch (kind) {
    case "blog": {
      return Blog;
    }
    default: {
      return () => null;
    }
  }
}

export default function layout(kind, props) {
  const Layout = getLayout(kind);
  return ({ children }) => <Layout children={children} {...props} />
}
