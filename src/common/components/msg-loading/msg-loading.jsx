import Lottie from "lottie-react";

//ICONS
import pikachu from './icon/pikachu.json';

//STYLE
import './msg-loading-style.scss';

const Loading = () => {
  return (
    <div className="loading">
      <Lottie animationData={pikachu} />
      <h3 className="loading-title">
        Carregando...
      </h3>
    </div>
  );
};

export default Loading;