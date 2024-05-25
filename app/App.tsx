/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {generateListItemData} from './dataGenerators/items';
import Section from './components/Section';

type ItemProps = {
  title: string;
  isSelected: boolean;
  onPress: (index: number) => void;
};

const Item = ({title, isSelected, onPress}: ItemProps) => (
  <TouchableOpacity
    style={[styles.item, isSelected ? styles.selected : {}]}
    onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const DATA = generateListItemData(20);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [selectedItem, setSelectedItem] = React.useState(null);

  const FlatListWrapper = () => {
    return (
      <FlatList
        data={DATA}
        renderItem={({item, index}) => (
          <Item
            title={item.title}
            isSelected={selectedItem === index}
            onPress={() => setSelectedItem(index)}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
        inverted
      />
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Section title="FlatList rendered via wrapper">
        <FlatListWrapper />
      </Section>

      <Section title="FlatList directly rendered">
        <FlatList
          data={DATA}
          renderItem={({item, index}) => (
            <Item
              title={item.title}
              isSelected={selectedItem === index}
              onPress={() => setSelectedItem(index)}
            />
          )}
          keyExtractor={item => item.id}
          horizontal
          inverted
        />
      </Section>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 4,
  },
  selected: {
    backgroundColor: Colors.primary,
  },
});

export default App;
