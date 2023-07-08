import React from 'react';

interface ITitleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Title = ({children,style} : ITitleProps) => {
  return <div className="custom-title" style={style}>{children}</div>;
};

export default Title;
