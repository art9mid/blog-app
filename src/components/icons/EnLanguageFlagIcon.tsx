import * as React from 'react';
import { moderateScale } from 'react-native-size-matters';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    viewBox="0 0 640 480"
    width={moderateScale(24)}
    height={moderateScale(18)}
    {...props}
  >
    <Path fill="#fff" d="M0 0h640v480H0z" />
    <Path fill="#ce1124" d="M281.6 0h76.8v480h-76.8z" />
    <Path fill="#ce1124" d="M0 201.6h640v76.8H0z" />
  </Svg>
);
export default SvgComponent;
