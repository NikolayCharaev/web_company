import React from 'react';

interface ITitleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Title = ({children,style} : ITitleProps) => {
  return <h1 className="custom-title" style={style}>{children}</h1>;
};

export default Title;
