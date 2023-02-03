import { Row } from "antd";
import React from "react";
import { Grid, Col, Typography, Image } from "antd";
import ASSET from "@/src/constant/assets";
import ArticleList from "../article/list";
import MENUS from "../../../src/constant/categories.json";
import { useRouter } from "next/router";
import ARTICLES from "@/src/constant/articles.json";
import IArticle from "@/src/interfaces/models/article";

const { useBreakpoint } = Grid;

interface IProps {
  children: React.ReactNode;
  preFooter?: boolean;
}

const Layout = (props: IProps) => {
  const { children, preFooter = true } = props;
  const mq = useBreakpoint();
  const router = useRouter();
  const slug = router.query.slug;
  const filterId = parseInt(router.query.filter as string);
  const detailItem = ARTICLES.data.find(
    (x) => x.id === parseInt(slug as string)
  );
  const data = ARTICLES.data.filter((x) => x.is_featured).slice(0, 3);
  return (
    <>
      <Row className="header" align={"middle"} justify="space-between">
        <Col span={mq.lg ? 8 : 4}>
          <Image
            className="logo"
            src={mq.xs ? ASSET.LOGO_HORIZONTAL : ASSET.LOGO_VERTICAL}
            preview={false}
            alt="logo"
          />
        </Col>
        {!mq.xs ? (
          <Col span={mq.lg ? 16 : 20}>
            <Row className={mq.lg ? "mr-10" : "mr-2"} gutter={mq.lg ? 32 : 16}>
              <Col span={8}>
                <Typography.Title
                  onClick={() => router.push("/")}
                  className={`menu-title ${
                    !filterId && !detailItem ? "active" : ""
                  }`}
                  level={mq.lg ? 4 : 5}
                >
                  All Articles
                </Typography.Title>
              </Col>
              {MENUS.data.map((x, index) => (
                <Col key={index} span={8}>
                  <Typography.Title
                    onClick={() => router.push(`/?filter=${x.id}`)}
                    className={`menu-title ${
                      filterId === x.id || detailItem?.categories.id === x.id
                        ? "active"
                        : ""
                    }`}
                    level={mq.lg ? 4 : 5}
                  >
                    {x.title}
                  </Typography.Title>
                </Col>
              ))}
              {[1, 2, 3].map((x) => (
                <Col key={x} span={8}>
                  <div style={{ borderBottom: "3px solid black" }}></div>
                </Col>
              ))}
            </Row>
          </Col>
        ) : (
          "as"
        )}
      </Row>
      <main className={mq.xs ? "p-4" : mq.lg ? "ph-14" : "ph-8"}>
        {children}
      </main>
      {preFooter && (
        <Row className={`bg-black ${mq.xs ? "p-4" : "p-6"}  mt-6`}>
          <Col span={24} className="text-center mb-2">
            <Typography.Title
              className={`text-color-white ${
                mq.xs ? "text-size-36" : "text-size-60"
              }  m-0`}
            >
              Empowering Minds
            </Typography.Title>
          </Col>
          <Col span={24} className="text-center">
            <Typography.Title level={3} className="text-color-grey">
              Insights and Strategies for Personal and Professional Growth
            </Typography.Title>
          </Col>
          <Col className="text-center mt-4">
            <ArticleList footer list={data} />
          </Col>
        </Row>
      )}

      <Row
        className="bg-light-grey pv-4 ph-8 w-100"
        justify={`${mq.xs ? "center" : "space-between"}`}
        align="middle"
      >
        <Col className={`${mq.xs ? "text-center" : ""}`}>
          <Typography.Text className="text-color-white">
            <Image preview={false} src={ASSET.LOGO_SEQUIZ} />
          </Typography.Text>
        </Col>
        <Col className={`${mq.xs ? "text-center" : ""}`}>
          <Typography.Text
            className={`${
              mq.xs ? "text-size-14" : "text-size-18"
            } text-color-orange`}
          >
            The more that you read, the more things you will know. The more that
            you learn, the more places you'll go.{" "}
            <p className="text-color-white">
              Created by the <u>Innovation Lab</u> for testing web development
              skills.
            </p>
          </Typography.Text>
        </Col>
      </Row>
    </>
  );
};

export default Layout;
