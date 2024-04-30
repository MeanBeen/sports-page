import React from "react";
import {
  Layout,
  Table,
  Divider,
  Row,
  Typography,
  Col,
  Avatar,
  Image,
} from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

const NrlScore = () => {
  const columns = [
    {
      title: "#",
      dataIndex: "number",
      key: "num",
    },
    {
      title: "Player",
      dataIndex: "username",
      key: "name",
    },
    {
      title: "AF",
      dataIndex: "Fantasy",
      key: "fp",
    },
    {
      title: "Goals",
      dataIndex: "Goal",
      key: "g",
    },
    {
      title: "Behinds",
      dataIndex: "behind",
      key: "b",
    },
    {
      title: "Disposals",
      dataIndex: "Disposal",
      key: "d",
    },
    {
      title: "Tackles",
      dataIndex: "Tackle",
      key: "T",
    },
  ];
  return (
    <Content style={{ display: "inline-block" }}>
      <Content style={{ backgroundColor: "white" }}>
        <Title style={{ textAlign: "center" }} level={2}>
          Raiders Vs Sharks
        </Title>
        <Row justify={"space-evenly"}>
          <Image
            preview={false}
            width={120}
            src="https://upload.wikimedia.org/wikipedia/en/c/c4/Logo_of_Canberra_Raiders.png"
          />
          <Text style={{ fontWeight: 600, fontSize: 30 }}>64</Text>
          <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/5/50/National_Rugby_League.svg/1024px-National_Rugby_League.svg.png" />
          <Text style={{ fontWeight: 600, fontSize: 30 }}>69</Text>
          <Image
            preview={false}
            width={120}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Cronulla-Sutherland_Sharks_logo.svg/1280px-Cronulla-Sutherland_Sharks_logo.svg.png"
          />
        </Row>
      </Content>
      <Row>
        <Col>
          <Title>Raiders</Title>
          <Table columns={columns} dataSource={null} />
        </Col>
        <Divider
          type="vertical"
          style={{ height: "50vh", marginLeft: 30, marginRight: 30 }}
        />
        <Col>
          <Title>Sharks</Title>
          <Table columns={columns} dataSource={null} />
        </Col>
      </Row>
    </Content>
  );
};
export default NrlScore;
