/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Switch,
  Linking,
} from 'react-native';
import {WebView} from 'react-native-webview';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 80,
    transform: [{scale: 0.6}],
  },
  imageContainer: {
    paddingTop: 40,
  },
  adsContainer: {
    width: '100%',
    height: 100,
    flex: 1,
    alignItems: 'center',
  },
  ad: {
    width: 300,
    height: '100%',
  },
  logo: {
    height: 200,
    resizeMode: 'stretch',
  },
  theme_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000c0',
    height: 60,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 10,
  },
});

const image = {
  uri: 'https://awss3stack-mybucket15d133bf-qsmiisib9jde.s3.amazonaws.com/zuoqin.pro.png',
};

const App = () => {
  const [isDarkMode, setIsEnabled] = useState(useColorScheme() === 'dark');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const webviewRef = useRef<WebView>(null);
  const loadAds = `
      const scriptTag = document.createElement("script");
        scriptTag.src = "http://pub.le360.ma/ads360/www/delivery/spcjs.php?id=20";
        scriptTag.async = true;
        document.body.appendChild(scriptTag);
        OA_show(335);
    `;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.adsContainer}>
          <View style={styles.ad}>
            <WebView
              ref={webviewRef}
              source={{
                html: `
                <iframe width="100%" height="50%" src="https://www.zuoqin.pro/" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                <a
        target="_blank"
        
        ></iframe>
    `,
              }}
              onNavigationStateChange={event => {
                if (event.url !== 'about:blank') {
                  // webviewRef.current?.stopLoading();
                  // Linking.openURL('https://fr.le360.ma/');
                }
              }}
              injectedJavaScript={loadAds}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.theme_container}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#f4f3f4"
              onValueChange={toggleSwitch}
              value={isDarkMode}
            />

            <Text style={styles.text}>
              {' '}
              I'm a{isDarkMode ? ' Software Engineer' : ' Project Manager'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
