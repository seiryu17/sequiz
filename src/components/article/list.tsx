import { List } from "antd";
import React from "react";
import ArticleItem from "./item";

const ArticleList = () => {
  return (
    <List
      grid={{
        column: 2,
        gutter: 48,
      }}
      dataSource={[1, 2, 3]}
      renderItem={(item) => (
        <List.Item>
          <ArticleItem />
        </List.Item>
      )}
    />
  );
};

export default ArticleList;
