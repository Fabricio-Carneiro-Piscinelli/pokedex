
//STYLE
import './msg-error-style.scss';

const Error = () => {
  return (
    <div className="error">
      <h3 className="error-title">
        Ops! Ocorreu um erro.
      </h3>
      <button 
        className="error-try_again"
        onClick={()=>window.location.reload()}
      > 
        Tentar novamente
      </button>
    </div>
  );
};

export default Error;