const Button = ({ onClick, type, children, className }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-[50px] whitespace-nowrap text-[14px] text-white rounded-lg px-6 py-3 ${className} hover:opacity-70`}
    >
      {children}
    </button>
  );
};

export default Button;
