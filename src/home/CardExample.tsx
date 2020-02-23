import {
  Card, Text,
} from '@ui-kitten/components';
import React, {
  FC,
  ReactElement,
} from 'react';
import {
  StyleSheet,
} from 'react-native';

interface ExampleProps {
  Thumbnail: any;
}
interface CustomHeaderProps {
  Thumbnail: any;
}

const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  headerImage: {
    flex: 1,
    height: 700,
  },
});

export const CustomHeader: FC<CustomHeaderProps> = ({ Thumbnail }) => (
  <React.Fragment>
    <Thumbnail />
    <Text style={styles.headerText} category="h6">
      Maldives
    </Text>
  </React.Fragment>
);

const makeHeader = (props: ExampleProps): (() => ReactElement<{}>) => {
  const Header = (): ReactElement<{}> => (
    <CustomHeader Thumbnail={props.Thumbnail} />
  );
  return Header;
};

const CardExample: FC<ExampleProps> = (props) => {
  const Header = makeHeader(props);
  return <Card  header={Header}>{props.children}</Card>;
};

export default CardExample;
