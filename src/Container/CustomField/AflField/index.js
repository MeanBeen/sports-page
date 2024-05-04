import React, { useEffect, useState } from "react";
import { Layout, Typography, Input, Image, Row, Col, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getScoresFetch } from "../../../Redux/Slice/ScoreSlice";

const { Search } = Input;

const { Content } = Layout;
const { Title, Text } = Typography;

const AflField = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const apiScore = useSelector((state) => state.score.scores);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScoresFetch());
  }, []);
  const filteredScores = apiScore.filter((data) =>
    data.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Content>
      <Title>Customize The Players On The Field</Title>
      <Search
        placeholder="Enter Players Name"
        enterButton="Search"
        size="large"
        style={{ marginBottom: 20 }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Row justify={"space-between"}>
        <Col>
          <Image
            preview={false}
            src="https://scontent.flhe25-1.fna.fbcdn.net/v/t1.6435-9/132335499_3592680610768037_7484227381407024546_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFfoNyxyvJgfAwzWTq_ymcBifOfCOH2ya6J858I4fbJriYTqGkT6CAk6ziGpZA9hDaVy2GBci2-cGSKUh5KjZLI&_nc_ohc=WYFreFAZ7DoQ7kNvgE_AtFF&_nc_ht=scontent.flhe25-1.fna&oh=00_AfDme3EG2rHjtelOskKHoSbBtK3AhPXRXlXTJU7pH7O_1w&oe=665D7193"
            alt="footballfield"
            width={800}
          />
        </Col>
        <Col>
          {filteredScores.map((data) => (
            <Card
              hoverable
              style={{ width: 110, height: 190 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Text>{data.username}</Text>
            </Card>
          ))}
        </Col>
      </Row>
    </Content>
  );
};

export default AflField;
