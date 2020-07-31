
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, Settings } from 'react-native';
import { Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import IconSetting from 'react-native-vector-icons/Feather';
import IconLeader from 'react-native-vector-icons/MaterialCommunityIcons';
import { MonoText } from '../components/StyledText';
import * as Progress from 'react-native-progress';
import ProgressCircle from 'react-native-progress-circle'
import datab from './WordsDatabase'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function HomeScreen({ navigation, route }) {
  function load(val) {
    const today = new Date().getFullYear()*365+new Date().getMonth()*31+new Date().getDate()
    var num = Math.abs((today) % datab['default'].length)
    const ques = datab['default'][num]
    txt = ques.question
    cor = ques.correctanswer
   }
  function lvlupdate() {
    while (xp > levels[lvl]) {
      xp = xp - levels[lvl]
      lvl = lvl + 1
      pu = pu + 1
    }
  }
  const levels = []
  for (var i = 100; i < 400; i = i + 10) {
    levels[i / 10 - 10] = i
  }
  //console.log(levels)
  let ans = "hard"
  try {
    ans = route.params.mode
  } catch {
    ans = "hard"
  }
  let ans2 = "fifty"
  try {
    ans2 = route.params.perweek
  } catch {
    ans2 = "fifty"
  }
  let lvl = 1
  try {
    lvl = route.params.lvl
  } catch {
    lvl = 1
  }
  let xp = 0
  try {
    xp = route.params.xp
  } catch {
    xp = 0
  }
  let pu = 0
  try {
    pu = route.params.pu
  } catch {
    pu = 0
  }

  lvlupdate()
  let txt = ''
  let cor = ''
  let arr = []
  load('default')
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <IconSetting name="settings" size={45} onPress={() => navigation.navigate('Setting', { mode: ans, perweek: ans2, lvl: lvl, xp: xp, pu: pu })} style={styles.wrenchIcon} />
        <View style={styles.titleContainer}>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.play} onPress={() => navigation.navigate("LearnIt", { answer: ans, perweek: ans2, lvl: lvl, xp: xp, pu: pu })}>
            <Text style={{ fontFamily: 'serif', fontSize: 48, fontWeight: '700', color: 'white' }}>Learn It</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timeTrial} onPress={() => navigation.navigate("TimeTrial", { answer: ans, perweek: ans2, lvl: lvl, xp: xp, pu: pu })}>
            <Text style={{ fontSize: 48, fontWeight: '700', fontFamily: 'serif', color: 'white' }}>Time Trial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wordUp} onPress={() => navigation.navigate("Challenge", { answer: ans, perweek: ans2, lvl: lvl, xp: xp, pu: pu })}>
            <Text style={{ fontSize: 48, fontWeight: '700', fontFamily: 'serif', color: 'white' }}>Challenge</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.textContainer}>
        <IconSetting name="book-open" size={40} onPress={()=> navigation.navigate('Dictionary', { mode: ans, perweek: ans2,lvl:lvl,xp:xp,pu:pu })} style={styles.Dictionary} />
        <Text style={{ fontSize: 38, fontWeight: '600', }}>Word Of the day</Text>
      </View>

      <View style={styles.WordOfDay}>
        <Text style={styles.WordText}>{cor.charAt(0).toUpperCase() + cor.substring(1, cor.length)}</Text>
        <Text style={styles.DefinitionText}>{txt}</Text>
      </View>
    </View>
  )
}
HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcfc',
  },
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: screenHeight / 3.6,
    marginTop: screenHeight / 20,
  },
  ButtonText: {
    fontSize: 60,
    fontWeight: '700',
    fontFamily: 'serif',
  },
  wrenchIcon: {
    paddingTop: screenHeight / 15,
    paddingLeft: screenHeight / 40,
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    color: 'black',
  },
  play: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    width: screenWidth - 50,
    backgroundColor: '#0b5cd5',
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 20,
    },
    shadowOpacity: 0.38,
    shadowRadius: 16.00,
    elevation: 24,
  },
  timeTrial: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth - 50,
    backgroundColor: '#bd0a0a',
    borderRadius: 35,
    paddingRight: 10,
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 20,
    },
    shadowOpacity: 0.38,
    shadowRadius: 16.00,
    elevation: 24,
  },
  wordUp: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth - 50,
    backgroundColor: '#ffc300',
    borderRadius: 35,
    marginLeft: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 20,
    },
    shadowOpacity: 0.38,
    shadowRadius: 16.00,
    elevation: 24,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex : 1,
    alignItems : 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: screenHeight / 20, 
  },
  WordText: {
    fontWeight: '700',
    fontSize: 32,
    alignSelf: 'flex-start',
    paddingLeft: screenWidth / 30,
    paddingTop: screenHeight / 60
  },
  DefinitionText: {
    fontWeight: '300',
    fontSize: 24,
    paddingLeft: screenWidth / 10,
    paddingRight: screenWidth / 35,
    paddingTop: screenHeight / 55
  },
  WordOfDay: {
    borderRadius: 25,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
    backgroundColor: 'white',
    width: screenWidth - 40,
    height: screenHeight / 3.7,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  Progress: {
    paddingBottom : screenHeight / 70,
    paddingRight : screenWidth / 20,
    alignItems : "flex-end",
    justifyContent : 'flex-end',
  },
  Dictionary : {
    paddingLeft: screenHeight / 45,
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    color: 'black',
  }
});
