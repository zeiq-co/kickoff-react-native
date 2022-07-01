import { FlatList, SafeAreaView } from 'react-native';

const List = ({ data, renderItem, loading, onRefresh }) => (
  <SafeAreaView>
    <FlatList
      data={data}
      renderItem={renderItem}
      initialNumToRender={15}
      maxToRenderPerBatch={15}
      onRefresh={onRefresh}
      refreshing={loading}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
);
export default List;
