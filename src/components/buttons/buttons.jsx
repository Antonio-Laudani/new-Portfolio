import '../../styles/buttons/buttons.css';

const Button = ({ children, onClick, type = "button", variant = "primary" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`glass-button ${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;