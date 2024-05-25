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

const FlatListWrapper = ({data, selectedItem, onSelectItem}) => (
  <FlatList
    data={data}
    renderItem={({item, index}) => (
      <Item
        title={item.title}
        isSelected={selectedItem === index}
        onPress={() => onSelectItem(index)}
      />
    )}
    keyExtractor={item => item.id}
    horizontal
    inverted
  />
);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [selectedFLItem, setSelectedFLItem] = React.useState(null);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Section title="Create an instance of the FlatListWrapper component">
        <FlatListWrapper
          data={DATA}
          selectedItem={selectedFLItem}
          onSelectItem={setSelectedFLItem}
        />
      </Section>

      <Section title="FlatList directly rendered">
        <FlatList
          data={DATA}
          renderItem={({item, index}) => (
            <Item
              title={item.title}
              isSelected={selectedFLItem === index}
              onPress={() => setSelectedFLItem(index)}
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
