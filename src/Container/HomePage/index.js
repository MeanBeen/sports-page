import React from "react";
import { Layout, Image, Divider, Button } from "antd";

const { Content } = Layout;

const HomePage = () => {
  return (
    <Content>
      <Content style={{ position: "relative", display: "inline-block" }}>
        <Image
          width={400}
          preview={false}
          src="https://thelongwalk.com.au/cdn/shop/products/IMG_3950_360x.jpg?v=1652767534"
        />
        <Button
          style={{
            position: "absolute",
            top: 150,
            left: 150,
            opacity: 0.9,
            height: 50,
            borderRadius: "9px",
            fontSize: "20px",
            fontWeight: 600,
            textAlign: "center",
            backgroundColor: "#1864ab",
          }}
        >
          AFL Ball
        </Button>
      </Content>
      <Divider
        type="vertical"
        style={{ height: "80vh", marginLeft: 50, marginRight: 50 }}
      />
      <Content style={{ position: "relative", display: "inline-block" }}>
        <Image
          width={395}
          preview={false}
          src="https://cdn4.theroar.com.au/wp-content/uploads/2019/10/NRL-Steeden-Generic-768x525.jpg"
        />
        <Button
          style={{
            position: "absolute",
            top: 150,
            left: 150,
            opacity: 0.8,
            borderRadius: "9px",
            fontSize: "20px",
            fontWeight: 600,
            textAlign: "center",
            height: 50,
            backgroundColor: "#00cf5d",
          }}
        >
          NRL Ball
        </Button>
      </Content>
    </Content>
  );
};

export default HomePage;
