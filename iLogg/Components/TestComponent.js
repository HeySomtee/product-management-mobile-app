import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { styles } from '../Styles';

const TestComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://74d6-197-210-54-242.ngrok-free.app/test');
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.innerContainer2}>
      <Text>Data from server:</Text>
      <Text>{JSON.stringify(data)}</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
};

export default TestComponent;
