import React from 'react';

type IconProps = {
  component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const Icon: React.FC<IconProps> = ({ component: Component }) => {
  return (
    <>
      <Component className={'ct-icon'} />
    </>
  );
};
