import { View } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import { Loading, Text } from '../components/atoms';
import Layout from '../components/global/Layout';
import { FlatList } from '../components/elements';
import Image from '../components/elements/Image';

const allEventsQuery = gql`
  query allEvents {
    allEvents {
      id
      name
      description
      featuredImage
    }
  }
`;
const Dashboard = () => {
  const { loading, error, data, refetch } = useQuery(allEventsQuery, {
    fetchPolicy: 'cache-and-network',
  });
  console.log('data', data);
  console.log('loading', loading);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);
  const events = data?.allEvents || [];
  return (
    <Layout>
      {loading && events.length === 0 && <Loading />}
      <View className="pt-5">
        <FlatList
          data={events}
          loading={loading}
          onRefresh={() => refetch()}
          renderItem={({ item }) => (
            <View className="flex flex-row mb-4 shadow bg-white mx-4 p-5 rounded">
              <Image
                src={item.featuredImage}
                cacheKey={item.id}
                height={55}
                width={55}
                borderRadius={5}
              />
              <View className="flex-1 ml-3">
                <Text bold className="mb-3">
                  {item.name}
                </Text>
                <Text textGray>{item.description}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </Layout>
  );
};
export default Dashboard;
