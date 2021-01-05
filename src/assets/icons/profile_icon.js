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
                {/* <Svg viewBox="0 0 60 60">
                    <Path d="M38.3,28.4c2.8-2.2,4.4-5.7,4.3-9.3c0-0.1,0-0.1,0-0.2c0-7-5.7-12.5-12.6-12.4l0,0h-0.2
                        c-7,0-12.5,5.7-12.4,12.6l0,0c-0.1,3.6,1.5,7.1,4.3,9.3c-7.3,3.2-11.9,10.5-12,18.4v0.3c0.1,1.3,1.2,2.4,2.6,2.2h0.3
                        c1.3-0.1,2.2-1.1,2.2-2.4v-0.2c0-8.5,6.9-15.3,15.3-15.3s15.3,6.9,15.3,15.3l0,0c0,1.4,1.2,2.6,2.6,2.6s2.6-1.2,2.6-2.6
                        C50.3,38.8,45.5,31.6,38.3,28.4L38.3,28.4z M37.6,19.3c-0.1,4.1-3.5,7.4-7.6,7.3l0,0h-0.3c-4.1-0.1-7.4-3.4-7.4-7.6v-0.3
                        c0.1-4.1,3.5-7.4,7.6-7.3h0.3c4.1,0,7.4,3.4,7.4,7.5V19.3z" fill="#FFD24F"/>
                </Svg> */}
                <Svg viewBox="0 0 60 60">
                    <Path d="M6,54
                        h48
                        a12,12 0 0 0 -12,-12
                        h-24
                        a12,12 0 0 0 -12,12
                        z
                        "
                        stroke="#828485"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="8"
                        fill="#828485"
                    />
                    <Circle
                        cx="30"
                        cy="17"
                        r="10"
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