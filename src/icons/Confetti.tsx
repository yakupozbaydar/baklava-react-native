import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgConfetti = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M5.962 7.374a1.508 1.508 0 0 1 2.133-2.132l10.663 10.663a1.508 1.508 0 0 1-2.132 2.133L5.962 7.374Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="m7.029 6.308 10.663 10.663-14.628 6.827a2.153 2.153 0 0 1-2.862-2.861L7.029 6.307ZM9.364.14a.27.27 0 0 1 .472 0l.678 1.24a.269.269 0 0 0 .107.106l1.239.678a.27.27 0 0 1 0 .472l-1.24.678a.269.269 0 0 0-.106.107L9.836 4.66a.27.27 0 0 1-.472 0l-.678-1.24a.27.27 0 0 0-.107-.106L7.34 2.636a.27.27 0 0 1 0-.472l1.24-.678a.27.27 0 0 0 .106-.107L9.364.14ZM21.364 10.94a.27.27 0 0 1 .472 0l.678 1.24a.269.269 0 0 0 .107.106l1.239.678a.27.27 0 0 1 0 .472l-1.24.678a.269.269 0 0 0-.106.107l-.678 1.239a.27.27 0 0 1-.472 0l-.678-1.24a.269.269 0 0 0-.107-.106l-1.239-.678a.27.27 0 0 1 0-.472l1.24-.678a.269.269 0 0 0 .106-.107l.678-1.239ZM20.164.14a.27.27 0 0 1 .472 0l.678 1.24a.269.269 0 0 0 .107.106l1.239.678a.27.27 0 0 1 0 .472l-1.24.678a.269.269 0 0 0-.106.107l-.678 1.239a.27.27 0 0 1-.472 0l-.678-1.24a.269.269 0 0 0-.107-.106l-1.239-.678a.27.27 0 0 1 0-.472l1.24-.678a.269.269 0 0 0 .106-.107L20.164.14Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.4 2.4a1.2 1.2 0 0 1 1.2 1.2c0 4.152-1.722 7.019-2.752 8.049a1.2 1.2 0 1 1-1.697-1.698c.57-.57 2.049-2.823 2.049-6.351a1.2 1.2 0 0 1 1.2-1.2ZM24 7.2A1.2 1.2 0 0 0 22.8 6c-3.384 0-5.474 1.377-6.849 2.751a1.2 1.2 0 1 0 1.697 1.697C18.674 9.423 20.184 8.4 22.8 8.4A1.2 1.2 0 0 0 24 7.2Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgConfetti;