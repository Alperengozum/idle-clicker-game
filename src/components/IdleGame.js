import React from 'react';
import {Link} from "react-router-dom";
import {Typography,Col, Divider, Row, Menu} from "antd";
const {Text, Title} = Typography;

function IdleGame() {
  return (
    <div>
      <div className={"App"}>
        <Title level={3}> World's Worst Idle Game</Title>

        <Link to="/">Earth  </Link>
        <Link to="/moon">Moon  </Link>
        <Link to="/market">Market  </Link>
        <Link to="/Alienmarket">Alien Market</Link>


        <Divider orientation="left"> Earth </Divider>
        <Row justify="center">
          <Col span={4} order={2}>
            Selam kızlar!
          </Col>
          <Col span={4} order={1}>
            Merhaba aw sala
          </Col>
        </Row>

      </div>

    </div>
  );
}

export default IdleGame;