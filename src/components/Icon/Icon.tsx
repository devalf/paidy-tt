import React from 'react';

type IconProps = {
  component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

/**
 * General Icon component which can be used to display icons.
 * Main purpose to add class to the icon, and to use general component for all icons
 */
export const Icon: React.FC<IconProps> = ({ component: Component }) => {
  return (
    <>
      <Component className={'ct-icon'} />
    </>
  );
};
