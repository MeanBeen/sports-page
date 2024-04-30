import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { getScoresFetch } from "../../../Redux/Slice/ScoreSlice";

const { Content } = Layout;
const { Title, Text } = Typography;

const AflScore = () => {
  const apiScore = useSelector((state) => state.score.scores);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScoresFetch());
  }, []);
  console.log(apiScore);

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
          Richmond Vs Melbourne
        </Title>
        <Row justify={"space-evenly"}>
          <Image
            preview={false}
            width={120}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Richmond_Tigers_logo.svg/1024px-Richmond_Tigers_logo.svg.png"
          />
          <Text style={{ fontWeight: 600, fontSize: 30 }}>43</Text>
          <Avatar src="https://logowik.com/content/uploads/images/afl-australian-football-league3019.jpg" />
          <Text style={{ fontWeight: 600, fontSize: 30 }}>82</Text>
          <Image
            preview={false}
            width={120}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Melbournefc.svg/1280px-Melbournefc.svg.png"
          />
        </Row>
      </Content>
      <Row>
        <Col>
          <Title>Richmond</Title>
          <Table columns={columns} dataSource={apiScore} />
        </Col>
        <Divider
          type="vertical"
          style={{ height: "50vh", marginLeft: 30, marginRight: 30 }}
        />
        <Col>
          <Title>Melbourne</Title>
          <Table columns={columns} dataSource={null} />
        </Col>
      </Row>
    </Content>
  );
};

export default AflScore;
