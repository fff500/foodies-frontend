const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      aria-label="button"
    >
      {children}
    </button>
  );
};

export default Button;
