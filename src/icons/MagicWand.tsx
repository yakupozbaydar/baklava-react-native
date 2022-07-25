import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMagicWand = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.97 1.437a1.5 1.5 0 0 1 2.122 0l2.469 2.469a1.5 1.5 0 0 1 0 2.12L6.024 24.562a1.5 1.5 0 0 1-2.122 0l-2.469-2.47a1.5 1.5 0 0 1 0-2.12L19.97 1.437Zm1.06 1.234 2.296 2.295-5.738 5.738-2.295-2.295L21.03 2.67ZM11.998 4.5C9.867 3.343 9.655 3.13 8.499 1 7.343 3.13 7.13 3.343 5 4.499c2.13 1.157 2.343 1.37 3.499 3.5 1.156-2.13 1.37-2.345 3.498-3.5Zm13 13c-2.13-1.156-2.342-1.369-3.498-3.499-1.156 2.13-1.369 2.343-3.499 3.499 2.13 1.157 2.343 1.37 3.499 3.5 1.157-2.13 1.37-2.345 3.498-3.5Zm-21.498-4.5c-.826-1.522-.978-1.674-2.499-2.5C2.521 9.674 2.673 9.52 3.5 8c.826 1.521.978 1.674 2.499 2.499-1.521.826-1.673.978-2.5 2.5Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMagicWand;