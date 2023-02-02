import IArticle from "@/src/interfaces/models/article";
import { Button, List, Grid } from "antd";
import React from "react";
import ArticleItem from "./item";
const { useBreakpoint } = Grid;

interface IProps {
  footer?: boolean;
  list: IArticle[];
  hasNext?: boolean;
  onLoadMore?: () => void;
}

const ArticleList = (props: IProps) => {
  const { footer, list, hasNext, onLoadMore } = props;
  const mq = useBreakpoint();

  const loadMore = (
    <div className="text-center">
      <Button
        style={{ display: "inline-flex", alignItems: "center" }}
        onClick={onLoadMore}
        size="large"
        className="ph-8 pv-4 border-black"
      >
        <span className="text-size-18">More Articles</span>
      </Button>
    </div>
  );

  return (
    <List
      grid={{
        column: mq.xs ? 1 : footer && mq.md ? 3 : 2,
        gutter: 48,
      }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <ArticleItem item={item} color={`${footer ? "white" : "black"}`} />
        </List.Item>
      )}
      loadMore={footer ? undefined : hasNext && loadMore}
    />
  );
};

export default ArticleList;
