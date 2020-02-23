declare module '*.jpg' {
  import {ImageSourcePropType} from 'react-native';
  const src: ImageSourcePropType;
  export default src;
}

declare module '*.jpeg' {
  import {ImageSourcePropType} from 'react-native';
  const src: ImageSourcePropType;
  export default src;
}

declare module '*.png' {
  import {ImageSourcePropType} from 'react-native';
  const src: ImageSourcePropType;
  export default src;
}

declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const src: React.FC<SvgProps>;
  export default src;
}
