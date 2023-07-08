import React from 'react';

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button = ({ children, onClick,style }: IButtonProps) => {
  return (
    <button className="custom-button" onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
