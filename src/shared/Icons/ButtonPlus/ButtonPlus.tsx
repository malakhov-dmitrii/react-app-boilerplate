import React, { FC } from 'react';
import { IconProps } from '../../interfaces/Icons';

const ButtonPlus: FC<IconProps> = props => {
  const size = props.size || '24px';
  const fill = props.fill || 'black';
  const opacity = props.opacity || 0.85;

  return (
    <svg
      className={props.className}
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="19" height="18">
        <path
          d="M20.3086 11.1328H12.8438V3.85547C12.8438 3.38906 12.4664 3.01172 12 3.01172C11.5336 3.01172 11.1562 3.38906 11.1562 3.85547V11.1328H3.85547C3.38906 11.1328 3.01172 11.5102 3.01172 11.9766C3.01172 12.443 3.38906 12.8203 3.85547 12.8203H11.1562V20.1211C11.1562 20.5875 11.5336 20.9648 12 20.9648C12.4664 20.9648 12.8438 20.5875 12.8438 20.1211V12.8203H20.3086C20.775 12.8203 21.1523 12.443 21.1523 11.9766C21.1523 11.5102 20.775 11.1328 20.3086 11.1328Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0703 68.9766C48.2074 68.9766 75.0703 42.1136 75.0703 8.97656C75.0703 -24.1605 48.2074 -51.0234 15.0703 -51.0234C-18.0668 -51.0234 -44.9297 -24.1605 -44.9297 8.97656C-44.9297 42.1136 -18.0668 68.9766 15.0703 68.9766Z"
          fill={fill}
          fillOpacity={opacity}
        />
      </g>
    </svg>
  );
};

export default ButtonPlus;
