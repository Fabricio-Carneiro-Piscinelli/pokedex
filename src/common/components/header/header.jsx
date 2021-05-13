import { Row, Col } from "rsuite";

//STYLE
import './header-style.scss';

//ICONS
import { ReactComponent as Logo } from '../../../client/icons/logo.svg';

const Header = () => {

  return (
    <div className="header">
      <Row className="header__content">
        <Col xs={24} className="header__content-logo">
          <Col 
            xs={7} 
            md={8} 
            lg={9} 
          >
            <Logo />
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Header;