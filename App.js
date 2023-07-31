import React, { useState } from 'react';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  const [pin, setPin] = useState ({ latitude: 37.78825,
    longitude: -122.4324 })

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
       }}
      
      >

        <Marker 
          coordinate = {pin} 
          draggable = { true }
          onDragStart={(event) => {
            console.log("drag start", event.nativeEvent.coordinate)
          }}
          onDragEnd={(event) => {
            setPin({ 
              latitude: event.nativeEvent.coordinate.latitude,
              longitude: event.nativeEvent.coordinate.longitude
            })
          }}
        >
          <Callout>
            <Text> you're here </Text>
          </Callout>
        </Marker>
        <Circle
          center={ pin }
          radius={1000}
        /> 
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
