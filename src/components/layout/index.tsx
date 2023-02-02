import { Row } from "antd";
import React from "react";
import { Grid, Col, Typography, Image } from "antd";
import ASSET from "@/src/constant/assets";
import ArticleList from "../article/list";
const { useBreakpoint } = Grid;

interface IProps {
  children: React.ReactNode;
}

const MENUS = [
  { title: "All Articles" },
  { title: "Fashion & Beauty" },
  { title: "Film" },
  { title: "Food & Drink" },
  { title: "Travel" },
  { title: "Business & Work" },
];

const Layout = (props: IProps) => {
  const { children } = props;
  const mq = useBreakpoint();
  console.log(mq);
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
              {MENUS.map((x, index) => (
                <Col key={index} span={8}>
                  <Typography.Title
                    className="menu-title"
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
      <Row className="bg-black p-6 mt-6">
        <Col span={24} className="text-center mb-2">
          <Typography.Title className="text-color-white text-size-60 m-0">
            Empowering Minds
          </Typography.Title>
        </Col>
        <Col span={24} className="text-center">
          <Typography.Title level={3} className="text-color-grey">
            Insights and Strategies for Personal and Professional Growth
          </Typography.Title>
        </Col>
        <Col className="text-center mt-4">
          <ArticleList footer />
        </Col>
      </Row>
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
