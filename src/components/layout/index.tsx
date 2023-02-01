import { Row } from "antd";
import React from "react";
import { Grid, Col, Typography, Image } from "antd";
import ASSET from "@/src/constant/assets";
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
  return (
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
          <Row className={mq.lg ? "mr-12" : "mr-4"} gutter={mq.lg ? 32 : 16}>
            {MENUS.map((x, index) => (
              <Col key={index} span={8}>
                <Typography.Title className="menu-title" level={mq.lg ? 4 : 5}>
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
      <main className="ph-12">{children}</main>
    </Row>
  );
};

export default Layout;
