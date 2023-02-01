import { Button, List, Grid } from "antd";
import React from "react";
import ArticleItem from "./item";
const { useBreakpoint } = Grid;

const ArticleList = () => {
  const mq = useBreakpoint();

  const loadMore = (
    <div className="text-center">
      <Button
        style={{ display: "inline-flex", alignItems: "center" }}
        size="large"
        className="ph-8 pv-4"
      >
        More Articles
      </Button>
    </div>
  );

  return (
    <List
      grid={{
        column: mq.xs ? 1 : 2,
        gutter: 48,
      }}
      dataSource={[1, 2, 3]}
      renderItem={(item) => (
        <List.Item>
          <ArticleItem />
        </List.Item>
      )}
      loadMore={loadMore}
    />
  );
};

export default ArticleList;
