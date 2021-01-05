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
                    <Path d="M50.4,33.6H33.6v16.8c0,2-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6V33.6H9.6C7.6,33.6,6,32,6,30s1.6-3.6,3.6-3.6h16.8
                        V9.6C26.4,7.6,28,6,30,6s3.6,1.6,3.6,3.6v16.8h16.8c2,0,3.6,1.6,3.6,3.6S52.4,33.6,50.4,33.6z"
                        fill="#929495"
                    />
                </Svg> */}
                <Svg viewBox="0 0 60 60">
                    {/* <Circle
                        cx="30"
                        cy="30"
                        r="24"
                        stroke="#828485"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="12"
                        fill="#828485"
                    /> */}
                    <Rect
                        x="6"
                        y="6"
                        width="48"
                        height="48"
                        rx="14"
                        stroke="#828485"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="8"
                        fill="#828485"
                    />
                    <Line
                        x1="14"
                        x2="46"
                        y1="30"
                        y2="30"
                        stroke="#101112"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="8"
                    />
                    <Line
                        y1="14"
                        y2="46"
                        x1="30"
                        x2="30"
                        stroke="#101112"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="8"
                    />
                </Svg> 
          </View>
      )
  }
  
  export default Create