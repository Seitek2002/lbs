import { Layout, Space, Anchor, Button, Row, Col, Typography } from "antd";
const { Title, Text, Link } = Typography;
import sendImg from "../../assets/img/send-img.png";

const Send = () => {
  return (
    <>
      <Row className="send">
        <Col className="send-left" span={12}>
          <div>
            <Title level={2}>
              Отправляйте и перевозите <br /> с LBS
            </Title>
            <Text>
              LBS открывает лучшие возможности и <br /> варианты для грузоотправителей и
              <br />  перевозчиков по перемещению товаров
            </Text>
            <button>Начать</button>
          </div>
        </Col>
        <Col className="send-right" span={12}>
          <img src={sendImg} alt="img" />
        </Col>
      </Row>
    </>
  );
};

export default Send;
