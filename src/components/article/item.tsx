import ASSET from "@/src/constant/assets";
import IArticle from "@/src/interfaces/models/article";
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  color: string;
  item: IArticle;
}

const ArticleItem = (props: IProps) => {
  const { color, item } = props;
  return (
    <Link className="detail-article-button" href={`/article/${item.id}`}>
      <Row gutter={[16, 16]} justify="center">
        <Col>
          <div
            className="position-relative"
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <Image
              sizes="100vw"
              alt="article-image"
              className="border-radius-12 article-image"
              src={item.image}
              blurDataURL={ASSET.LOGO_HORIZONTAL}
              fill
              priority
            />
          </div>
        </Col>
        <Col
          className={`ph-1 border-radius-20 border-${color}`}
          style={{ border: `1px solid` }}
        >
          <Typography.Text className={`text-color-${color}`}>
            BY <strong>{item.author}</strong>
          </Typography.Text>
        </Col>
        <Col span={24} className="text-center ph-4">
          <Typography.Title className={`text-color-${color}`} level={3}>
            {item.title}
          </Typography.Title>
        </Col>
      </Row>
    </Link>
  );
};

export default ArticleItem;
