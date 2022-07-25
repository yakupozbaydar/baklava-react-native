import * as React from 'react';
import Svg, { SvgProps, Mask, Path } from 'react-native-svg';

const SvgMarket = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Mask id="a" fill="#fff">
      <Path d="M0 6.5A1.5 1.5 0 0 1 1.5 5h21A1.5 1.5 0 0 1 24 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 8.5v-2Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.118.287a1.5 1.5 0 0 1 2.095.33l4 5.5a1.5 1.5 0 1 1-2.426 1.765l-4-5.5a1.5 1.5 0 0 1 .33-2.095ZM9.882.287a1.5 1.5 0 0 1 .331 2.095l-4 5.5a1.5 1.5 0 0 1-2.426-1.764l4-5.5A1.5 1.5 0 0 1 9.882.287ZM23 11H1l1.985 10.554A3 3 0 0 0 5.933 24h12.134a3 3 0 0 0 2.948-2.446L23 11Zm-10 4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Zm3-1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm-7 1a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Z"
      />
    </Mask>
    <Path
      d="M0 6.5A1.5 1.5 0 0 1 1.5 5h21A1.5 1.5 0 0 1 24 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 8.5v-2Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.118.287a1.5 1.5 0 0 1 2.095.33l4 5.5a1.5 1.5 0 1 1-2.426 1.765l-4-5.5a1.5 1.5 0 0 1 .33-2.095ZM9.882.287a1.5 1.5 0 0 1 .331 2.095l-4 5.5a1.5 1.5 0 0 1-2.426-1.764l4-5.5A1.5 1.5 0 0 1 9.882.287ZM23 11H1l1.985 10.554A3 3 0 0 0 5.933 24h12.134a3 3 0 0 0 2.948-2.446L23 11Zm-10 4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Zm3-1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm-7 1a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="m16.213.618-.809.588.81-.588ZM14.118.287l.588.809-.588-.81Zm6.095 5.83-.809.589.81-.588Zm-.33 2.096-.589-.809.588.81Zm-2.096-.33.809-.589-.809.588Zm-4-5.5.809-.589-.809.588Zm-3.574 0-.809-.589.81.588ZM9.883.286l-.589.809.588-.81Zm-3.67 7.595-.809-.588.81.588Zm-2.095.331.588-.809-.588.81Zm-.331-2.095.809.588-.81-.588Zm4-5.5.809.588-.81-.588ZM1 11v-1H-.206l.223 1.185L1 11Zm22 0 .983.185.223-1.185H23v1ZM2.985 21.554l.982-.184-.982.184Zm18.03 0 .983.185-.983-.185ZM1.5 6h21V4h-21v2Zm21.5.5v2h2v-2h-2ZM22.5 9h-21v2h21V9ZM1 8.5v-2h-2v2h2Zm.5.5a.5.5 0 0 1-.5-.5h-2A2.5 2.5 0 0 0 1.5 11V9ZM23 8.5a.5.5 0 0 1-.5.5v2A2.5 2.5 0 0 0 25 8.5h-2ZM22.5 6a.5.5 0 0 1 .5.5h2A2.5 2.5 0 0 0 22.5 4v2Zm-21-2A2.5 2.5 0 0 0-1 6.5h2a.5.5 0 0 1 .5-.5V4ZM17.022.03a2.5 2.5 0 0 0-3.492-.552l1.176 1.618a.5.5 0 0 1 .699.11L17.021.03Zm4 5.5-4-5.5-1.617 1.176 4 5.5 1.617-1.176Zm-.551 3.492a2.5 2.5 0 0 0 .55-3.492l-1.617 1.176a.5.5 0 0 1-.11.698l1.177 1.618Zm-3.493-.552a2.5 2.5 0 0 0 3.492.552l-1.176-1.618a.5.5 0 0 1-.698-.11L16.978 8.47Zm-4-5.5 4 5.5 1.618-1.176-4-5.5-1.618 1.176Zm.552-3.492a2.5 2.5 0 0 0-.552 3.492l1.618-1.176a.5.5 0 0 1 .11-.698L13.53-.522ZM11.022 2.97a2.5 2.5 0 0 0-.552-3.492L9.294 1.096a.5.5 0 0 1 .11.698l1.618 1.176Zm-4 5.5 4-5.5-1.618-1.176-4 5.5L7.022 8.47Zm-3.492.552a2.5 2.5 0 0 0 3.492-.552L5.404 7.294a.5.5 0 0 1-.698.11L3.53 9.022ZM2.978 5.53a2.5 2.5 0 0 0 .552 3.492l1.176-1.618a.5.5 0 0 1-.11-.698L2.978 5.53Zm4-5.5-4 5.5 1.618 1.176 4-5.5L6.978.03Zm3.492-.552A2.5 2.5 0 0 0 6.978.03l1.618 1.176a.5.5 0 0 1 .698-.11L10.47-.522ZM1 12h22v-2H1v2Zm2.967 9.37L1.983 10.815l-1.966.37 1.985 10.554 1.965-.37ZM5.933 23a2 2 0 0 1-1.966-1.63l-1.965.37A4 4 0 0 0 5.932 25v-2Zm12.134 0H5.933v2h12.134v-2Zm1.966-1.63A2 2 0 0 1 18.067 23v2a4 4 0 0 0 3.931-3.26l-1.965-.37Zm1.984-10.555L20.033 21.37l1.965.37 1.985-10.555-1.966-.37ZM12 15h2a2 2 0 0 0-2-2v2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 5v-5h-2v5h2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-5v5h2v-5h-2Zm6 0a2 2 0 0 0-2-2v2h2Zm0 5v-5h-2v5h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-2-2a2 2 0 0 0 2 2v-2h-2Zm0-5v5h2v-5h-2Zm2-2a2 2 0 0 0-2 2h2v-2Zm-8 2h2a2 2 0 0 0-2-2v2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 5v-5H6v5h2Zm0 0H6a2 2 0 0 0 2 2v-2Zm0 0v2a2 2 0 0 0 2-2H8Zm0-5v5h2v-5H8Z"
      fill={props?.fill ?? `#273142`}
      mask="url(#a)"
    />
  </Svg>
);

export default SvgMarket;