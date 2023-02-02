import ArticleList from "@/src/components/article/list";
import Layout from "../src/components/layout";
import ARTICLES from "@/src/constant/articles.json";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const filterId = router.query?.filter;
  const data = ARTICLES.data.filter((x) =>
    filterId
      ? !x.is_featured &&
        x.categories.id === parseInt((filterId as string) || "")
      : !x.is_featured
  );
  data.sort(
    (a, b) =>
      new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
  );
  return (
    <Layout>
      <ArticleList
        list={data.slice(0, page * 10)}
        hasNext={data.length / (page * 10) > 1}
        onLoadMore={() => setPage(page + 1)}
      />
    </Layout>
  );
}
