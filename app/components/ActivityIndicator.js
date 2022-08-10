// import React from 'react';
// import LottieView from 'lottie-react-native';

// function ActivityIndicator({ visible = false }) {
//   if (!visible) return null;

//   return (
//     <LottieView
//       autoPlay
//       loop
//       source={require('../assets/animations/data.json')}
//     />
//   );
// }

// export default ActivityIndicator;

import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  const animation = useRef(null);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        source={require('../assets/animations/kbeLoad.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default ActivityIndicator;
