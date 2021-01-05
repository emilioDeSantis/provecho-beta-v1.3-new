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
          <View style={style.search_icon_view}>
                {/* <Svg viewBox="0 0 100 100">
                    <Circle 
                        cx="48" 
                        cy="48" 
                        r="7"
                        strokeLinecap="round"
                        stroke="#ffcc4d"
                        strokeWidth="2"
                    />
                    <Line 
                        x1="53" 
                        y1="53" 
                        x2="58" 
                        y2="58"
                        strokeLinecap="round"
                        stroke="#ffcc4d"
                        strokeWidth="2"
                    />
                </Svg> */}
                <Svg viewBox="0 0 60 60">
                    <Circle
                        cx="27"
                        cy="27"
                        r="12"
                        stroke="#444"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="3"
                    />
                    <Line
                        x1="36.5"
                        x2="41.61"
                        y1="36.5"
                        y2="41.61"
                        stroke="#444"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="5"
                    />
                </Svg> 
          </View>
      )
  }
  
  export default Create