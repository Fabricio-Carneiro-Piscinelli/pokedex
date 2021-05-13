import { Modal } from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';

//STYLE
import './chart-style.scss';

const ChartModal = (props) => {
  const { showModal, closeModal, dataPokemon } = props;

  return (
    <>
      <Modal
        show={showModal}
        onHide={closeModal}
        className="modal-chart"
      >
        <div className="modal-chart__content">
          <Modal.Header>
            <div className="modal-chart__content-title">
              Estatística de poder <span>{dataPokemon?.species?.name}</span>
              <div className="modal-chart__content-title-feature"/>
            </div>
          </Modal.Header>
          <Modal.Body>
            {
              dataPokemon?.stats?.map((item, i) => {
                return (
                  <div className="modal-chart__content-bars">
                    <div className="modal-chart__content-bars-name">
                      {item.stat.name}
                    </div>
                    <div
                      className="modal-chart__content-bars-bar"
                      style={{ width: item.base_stat * 2  }}
                    >
                    </div>
                    <div className="modal-chart__content-bars-value">
                      {item.base_stat}
                    </div>
                  </div>
                )
              })
            }
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default ChartModal;