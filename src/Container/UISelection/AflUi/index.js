import React from "react";
import { Layout, Typography, Image, Divider, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Content } = Layout;
const { Text, Title } = Typography;

const AflUi = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  // const selectedButton = location.state ? location.state.selectedButton : null;

  return (
    <Content>
      <Title level={2}>Select a AFL Field</Title>
      <Content style={{ display: "inline-block" }}>
        <Title level={3}>Customizable Field</Title>

        <Image
          width={400}
          height={440}
          preview={false}
          src="https://cdn.imgbin.com/1/4/7/imgbin-melbourne-cricket-ground-australian-football-league-melbourne-football-club-adelaide-football-club-australian-rules-football-football-play-diagram-template-bgQ2ysbNNYGkseeenu6D8wAjt.jpg"
          // src={
          //   selectedButton === "AFL"
          //     ? "https://cdn.imgbin.com/1/4/7/imgbin-melbourne-cricket-ground-australian-football-league-melbourne-football-club-adelaide-football-club-australian-rules-football-football-play-diagram-template-bgQ2ysbNNYGkseeenu6D8wAjt.jpg"
          //     : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/NRL_Rugby_League_field.svg/800px-NRL_Rugby_League_field.svg.png"
          // }
        />
      </Content>
      <Divider
        type="vertical"
        style={{ height: "80vh", marginLeft: 50, marginRight: 50 }}
      />
      <Content style={{ display: "inline-block" }}>
        <Title style={{ marginBottom: 2 }} level={3}>
          Score Table
        </Title>
        <Image
          width={400}
          height={440}
          preview={false}
          onClick={() => navigate("/aflscore")}
          src="https://scontent.flhe25-1.fna.fbcdn.net/v/t1.6435-9/55944954_2675672212448449_5720035387523465216_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHerf3xtim5D6HNsvlRHDn8hYy8vAGWqgiFjLy8AZaqCHU-ry9YAOXOianE9blKGj9RU1YprNIliZMfcufo256T&_nc_ohc=DL3C1kjqhpcQ7kNvgEQ4sYm&_nc_ht=scontent.flhe25-1.fna&oh=00_AfD_FwVcgsqpbZivJLqCG98OgLAhXZymAajVVXmPPzD8ug&oe=6652BBEA"
          // src={
          //   selectedButton === "AFL"
          //     ? "https://scontent.flhe25-1.fna.fbcdn.net/v/t1.6435-9/55944954_2675672212448449_5720035387523465216_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHerf3xtim5D6HNsvlRHDn8hYy8vAGWqgiFjLy8AZaqCHU-ry9YAOXOianE9blKGj9RU1YprNIliZMfcufo256T&_nc_ohc=DL3C1kjqhpcQ7kNvgEQ4sYm&_nc_ht=scontent.flhe25-1.fna&oh=00_AfD_FwVcgsqpbZivJLqCG98OgLAhXZymAajVVXmPPzD8ug&oe=6652BBEA"
          //     : "https://i.imgur.com/jowmkps.png"
          // }
        />
      </Content>
      <Row>
        <ArrowLeftOutlined
          style={{
            fontSize: 25,
            marginRight: 20,
            marginTop: 10,
            marginLeft: 0,
          }}
          onClick={() => navigate("/Homepage")}
        />
        <Title level={2}>Back To Home</Title>
      </Row>
    </Content>
  );
};

export default AflUi;

// "https://cdn.imgbin.com/1/4/7/imgbin-melbourne-cricket-ground-australian-football-league-melbourne-football-club-adelaide-football-club-australian-rules-football-football-play-diagram-template-bgQ2ysbNNYGkseeenu6D8wAjt.jpg"

// "https://scontent.flhe25-1.fna.fbcdn.net/v/t1.6435-9/55944954_2675672212448449_5720035387523465216_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHerf3xtim5D6HNsvlRHDn8hYy8vAGWqgiFjLy8AZaqCHU-ry9YAOXOianE9blKGj9RU1YprNIliZMfcufo256T&_nc_ohc=DL3C1kjqhpcQ7kNvgEQ4sYm&_nc_ht=scontent.flhe25-1.fna&oh=00_AfD_FwVcgsqpbZivJLqCG98OgLAhXZymAajVVXmPPzD8ug&oe=6652BBEA"
