import * as React from 'react';
import { moderateScale } from 'react-native-size-matters';
import Svg, { G, Path, SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    viewBox="0 0 640 480"
    width={moderateScale(24)}
    height={moderateScale(18)}
    {...props}
  >
    <G fillRule="evenodd" strokeWidth="1pt">
      <Path fill="gold" d="M0 0h640v480H0z" />
      <Path fill="#0057b8" d="M0 0h640v240H0z" />
    </G>
  </Svg>
);
export default SvgComponent;
