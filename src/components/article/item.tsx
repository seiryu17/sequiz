import { Col, Image, Row, Typography } from "antd";
import React from "react";

interface IProps {
  color: string;
}

const ArticleItem = (props: IProps) => {
  const { color } = props;
  return (
    <Row gutter={[16, 16]} justify="center">
      <Col>
        <Image
          preview={false}
          className="border-radius-12"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        />
      </Col>
      <Col
        className={`ph-1 border-radius-20 border-${color}`}
        style={{ border: `1px solid` }}
      >
        <Typography.Text className={`text-color-${color}`}>
          BY <strong>CHRISOPER JOHNSON</strong>
        </Typography.Text>
      </Col>
      <Col span={24} className="text-center ph-4">
        <Typography.Title className={`text-color-${color}`} level={3}>
          10 Simple and Delicious Ways to Cook with Quinoa
        </Typography.Title>
      </Col>
    </Row>
  );
};

export default ArticleItem;
