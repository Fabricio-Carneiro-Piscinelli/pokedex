import { Row, Col } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

//ICONS
import { ReactComponent as IconsTop } from '../../../client/icons/top-icon.svg';

//STYLE
import './card-style.scss';

const Card = (props) => {
  const { title, number, urlImage, OpenModalStats} = props;
  return (
    <Col 
      xs={24} 
      md={6}  
      lg={5}  
      className="card" 
      onClick={()=>OpenModalStats()}
    >
      <Col xs={24}  className="card__content">
        <Row>
          <Col xs={24} className="card__content-header">
            <IconsTop />
          </Col>
        </Row>
        <Row>
          <Col xs={24} className="card__content-image">
            <img src={urlImage} alt="image pokemon"/>
          </Col>
        </Row>
        <Row className="card__content-footer">
          <Col xs={11}>
            <div className="card__content-footer-name">
              {title} 
            </div>
            <div className="card__content-footer-feature"/>
          </Col>
          <Col xs={12}>
            <Col xs={24} className="card__content-footer-line">
              <div className="card__content-footer-number_title">
                <p>
                  Número 
                </p>
              </div>
              <div className="card__content-footer-number_value">
                <p>
                  {number}
                </p>
              </div>
            </Col>
          </Col>
        </Row>
      </Col>
    </Col>
  );
}

export default Card;