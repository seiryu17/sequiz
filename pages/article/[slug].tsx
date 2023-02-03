import Layout from "@/src/components/layout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ARTICLES from "@/src/constant/articles.json";
import IArticle from "@/src/interfaces/models/article";
import { Col, Divider, Row, Grid } from "antd";

const { useBreakpoint } = Grid;

const ArticleDetail = () => {
  const router = useRouter();
  const mq = useBreakpoint();
  const slug = router.query.slug;
  const item =
    ARTICLES.data.find((x) => x.id === parseInt(slug as string)) ||
    ({} as IArticle);
  return (
    <Layout preFooter={false}>
      <div
        style={{
          width: "100%",
          height: "auto",
          position: "relative",
        }}
      >
        <Image
          alt="article-image"
          className="border-radius-12 detail-article-image"
          src={item.image}
          fill
          sizes="100vw"
        />
        <Row
          style={{ bottom: 0, left: 0, borderRadius: "0px 10px 0px 10px" }}
          justify="center"
          className="position-absolute bg-white p-2"
        >
          <Col>
            <span>
              Published{" "}
              {new Date(item.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </span>
          </Col>
          <Col className="text-center" span={24}>
            <span>
              By <b>{item.author.toUpperCase()}</b>
            </span>
          </Col>
        </Row>
      </div>
      <Row justify={"center"} className={`${mq.xl ? "ph-10" : "ph-2"} mb-4`}>
        <Col className="text-center">
          <span
            className={`${
              mq.xl ? "text-size-60" : "text-size-32"
            }  text-weight-semibold`}
          >
            {item.title}
          </span>
        </Col>
        <Col className={`text-center ${mq.xl ? "ph-18" : ""} pv-4 pt-6`}>
          <span className={`${mq.xl ? "text-size-32" : "text-size-20"}`}>
            {item.summary}
          </span>
        </Col>
        <Divider style={{ borderTop: "3px solid #B4B4B4" }} />
        <Col className={`text-justify ${mq.xl ? "ph-18" : ""}  pt-6`}>
          <span className="text-size-18">{item.content}</span>
        </Col>
      </Row>
    </Layout>
  );
};

export default ArticleDetail;
