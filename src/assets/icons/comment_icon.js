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
          <View style={style.comment_icon_view}>
                <Svg viewBox="0 0 100 100">
                    <Path d="M60.4,55.5l-1.1-2.2c0,0,0,0,0,0c0.4-1,0.7-2.1,0.7-3.3c0-5.2-4.9-9.5-11-9.5c-6.1,0-11,4.2-11,9.5
                        s4.9,9.5,11,9.5c1.9,0,3.6-0.4,5.2-1.1l4.8-0.1l3,0.1L60.4,55.5z M42.9,52.5c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2
                        C44.9,51.6,44,52.5,42.9,52.5z M48.9,52.5c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C50.9,51.6,50,52.5,48.9,52.5z M54.9,52.5
                        c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C56.9,51.6,56,52.5,54.9,52.5z"
                        fill="#FFD24F"
                    />
                </Svg>
          </View>
      )
  }
  
  export default Create