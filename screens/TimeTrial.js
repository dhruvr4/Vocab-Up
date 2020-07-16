import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { selectAssetSource } from 'expo-asset/build/AssetSources';
<<<<<<< HEAD:screens/TimeTrial.js
=======

>>>>>>> 8dd7a818f3792ada3dd4f4825a72d9fbdcd8c791:screens/PlayScreen.js


export default function TimeTrial({navigation,route}) {  
  class Question {
    question="";
    answers=[];
    correctanswer="";
    constructor( a, b, c) {
        this.question=a;
        for( i=0;i<4;i++) {
            this.answers[i] = b[i];
        }
        this.correctanswer=c;
    }
}
  const datab = {
    easy :[],
    medium:[],
    hard :[],
    default :[]
}
  function create_database() {
    add("something not clear",["ambigous","monotonous", "unique","lucid"], "ambigous","easy");
    add("something not clear",["ambigous","monotonous", "unique","lucid"], "ambigous","medium");
    add("something not clear",["ambigous","monotonous", "unique","lucid"], "ambigous","hard");
    add("something not clear",["ambigous","monotonous", "unique","lucid"], "ambigous","default");
  }
  add=( a,  b, c, type) => {
    toAdd = new Question(a,b,c);
    datab[type].push(toAdd)
}  
    function load(val) {
    create_database()
    const ques = datab[val][Math.floor(Math.random() * datab[val].length)]
    txt=ques.question
    cor =ques.correctanswer
    arr=ques.answers
    shuffle(arr)
    }

    function answer ( answer) {
      let va= (options).indexOf(correct) === answer
      if (answer == -1) {
        va = "Time Up"
        navigat(va) 
      } 
      //console.log(va)
      
      if (va === true){
        settotscore(totscore+1)
      }
      if (va === false){
        settotwrong([...totwrong,[text,options[answer],correct]])
      }
      }
  
    function navigat(ans) {
      clearInterval(time)
      //console.log(totscore)
      //console.log(totwrong)
      navigation.navigate("TimeTrialResult",{answer :totscore,correct:totwrong})
    }

    function tick() {
      if (timer == 0)  {
        answer(-1)
          }
      else {
          setTimer(timer-1)
        }
    }
    React.useEffect(()=> {
        time = setInterval(tick,1000)
        return () => {
          clearInterval(time)
        }
    })
    
    function shuffle(array) {

      array.sort(() => Math.random() - 0.5);
    }
    const result = JSON.stringify(route.params.answer)
    resul = result.substring(1,result.length-1)
    //console.log(resul)
    let txt=''
    let cor =''
    let arr=[]
    load(resul)
    const [ text, setText ] = React.useState(txt)
    const [ options, setOptions ] = React.useState (arr)
    const [ correct, setCorrect ] = React.useState(cor)
    const [ totscore, settotscore ] = React.useState(0)
    const [ totwrong, settotwrong ] = React.useState([])
    let [ timer, setTimer ] = React.useState(10)
    let time = null
    //let time = setInterval(this.tick, 1000);
    return (
    <View>
      <Text style = {styles.timer}> {timer}</Text>
      <Text style = {styles.text}> {text}</Text>
      <Button
        onPress={() => {answer(0)}}
        title={options[0]}
        color="#841584"
      />    
      <Button
        onPress={() => {answer(1)}}
        title={options[1]}
         color="#841584"
      />    
      <Button
        onPress={() => {answer(2)}}
        title={options[2]}
        color="#841584"
      />    
      <Button
        onPress={() => {answer(3)}}
        title={options[3]}
        color="#841584"
      />   
    </View>
    );
}
const styles = StyleSheet.create({
  timer:{
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize :30,
    textAlign: "center"    
  },
  text:{
    textAlign: "center",
    paddingTop: 30,
    fontWeight: 'bold',
    fontSize :30,
    width : 300,
    height : 100,
    backgroundColor:'#696969',
  },
  button0:{
    paddingTop:20,
    backgroundColor:'white',
    width:400,
    height :90,
  },
  button1:{
    width:400,
    height :90,
    backgroundColor:'white'
  },
  button2:{
    width:400,
    height :90,
    backgroundColor:'white'
  },
  button3:{
    width:400,
    height :90,
    backgroundColor:'white'
  },


  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
