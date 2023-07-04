import { Layout, Space, Anchor, Button, Row, Col, Typography } from "antd";
const { Title, Text, Link } = Typography;

const Result = () => {
  return (
    <Row id="result" className="results">
      <div className="container">
        <Title level={2}>Наши результаты в цифрах</Title>
        <Row className="results-wrapper">
          <div className="results-item">
            <Text>10</Text>
            <p className="results-description">Лет опыта работы</p>
          </div>
          <div className="result-hr"></div>
          <div className="results-line"></div>
          <div className="results-item">
            <Text>200 000</Text>
            <p className="results-description">Активных пользователей</p>
          </div>
          <div className="result-hr"></div>
          <div className="results-line"></div>
          <div className="results-item">
            <Text>96%</Text>
            <p className="results-description">Успешных заказов</p>
          </div>
        </Row>
      </div>
    </Row>
  );
};

export default Result;
