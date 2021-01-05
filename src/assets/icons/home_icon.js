import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';
   
  import React from 'react';
  import { View } from 'react-native';
  import style from '../../style';

   
  const Create = (props) => {
      return (
          <View style={style.icon_view}>
                {/* <Svg viewBox="0 0 69 60">
                    <G transform="translate(-24.448 -15.184)">
                        <Path d="M90.6,36.3L59.1,18.6l-15.9,9.5v-8.5c0-0.7-0.5-1.4-1.3-1.4h-5.7C35,18.4,35,19.9,35,19.9
                            v12.2l-7.7,4.4"
                            stroke='#FFD24F'
                            strokeWidth='5.6747'
                            strokeLinecap='round'
                            strokeMiterlimit='10'
                        />
                        <Path d="M82.7,75V31.9"
                            stroke='#FFD24F'
                            strokeWidth='5.6747'
                            strokeMiterlimit='10'
                        />
                        <Line x1="35" y1="75" x2="35" y2="29.3"
                            stroke='#FFD24F'
                            strokeWidth='5.6747'
                            strokeMiterlimit='10'
                        />
                    </G>
                </Svg> */}
                <Svg viewBox="0 0 60 60">
                    <Path 
                        d="M30,6
                        l-24,18
                        h48
                        z
                        "
                        stroke="#828485"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="8"
                        fill="#828485"
                    />
                    <Path 
                        d="M19,54
                        H12 
                        v-26
                        h36
                        v26
                        H41
                        v-18
                        h-22
                        z
                        "
                        stroke="#828485"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="8"
                        fill="#828485"
                    />
                </Svg>
          </View>
      )
  }
  
  export default Create