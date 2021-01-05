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
                {/* <Svg viewBox="0 0 67 60">
                    <Path id="Path_923_1_" class="st3" d="M66.2,21.8c-0.7,1.2-2.2,1.6-3.4,1l0,0l-4.5-2.6V60h-50V20.3l-4.5,2.6
                        c-1.1,0.7-2.8,0.4-3.4-0.8l0,0c-0.7-1.2-0.2-2.8,0.9-3.5L7.4,15l0.8-0.5V4.1c0-0.5,0.3-0.8,0.9-0.8l0,0h6.4c0.5,0,0.9,0.4,0.9,0.8
                        v5.5l15.4-8.9l0,0H32h0.1h0.1h0.1h0.1h0.1h0.1h0.1h0.5h0.1h0.1h0.1h0.1h0.1c0,0,0,0,0.1,0s0.1,0,0.1,0h0.1c0,0,0,0,0.1,0l15.4,8.9
                        l7.5,4.3l7.9,4.5C66.5,19.1,66.9,20.6,66.2,21.8z"
                        fill="#FFD24F"
                    />
                    <Polygon class="st3" points="33.1,0 31.3,1.1 34.9,1.1"
                        fill="#FFD24F"
                    />
                    <Path class="st3" d="M16,11H9.6c-0.8,0-1.4-0.6-1.4-1.4V1.4C8.2,0.6,8.9,0,9.6,0H16c0.8,0,1.4,0.6,1.4,1.4v8.2
                        C17.4,10.4,16.8,11,16,11z"
                        fill="#FFD24F"
                    />
                </Svg> */}
                <Svg viewBox="0 0 60 60">
                    <Path 
                        d="M30,6
                        l-24,18
                        h48
                        z
                        "
                        stroke="#eee"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="8"
                        fill="#eee"
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
                        stroke="#eee"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="8"
                        fill="#eee"
                    />
                </Svg>
          </View>
      )
  }
  
  export default Create