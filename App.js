import React from 'react';
import { StyleSheet, Text, View,WebView, HTMLView, Button } from 'react-native';
//import  htmlcontent from '';
import AwsIot from './bundle.js';
//import { WebView } from 'react-native-webview-messaging/WebView';
//import RNExitApp from 'react-native-exit-app';
import RNRestart from 'react-native-restart';


var WEBVIEW_REF = 'webview';



export default class App extends React.Component {
 



 
  componentDidMount() {
   // console.log("Helloodxnaksnkda"+window.AwsIot.device)
 
}
//communicating between screens 


onMessage = e =>{
   console.log(e.nativeEvent.data)
}

addMessage(message){
 // Alert.alert("Something", "Something");
  console.log("hey message got receieved here"+message);
  // this.setState({
  //   receivedMessages: [...this.state.receivedMessages, message]
  // })
  this.postMessage();
  
  console.log("app is going to exit");
  
  RNRestart.Restart();

}


postMessage(){
 
      var a= "rahulazasasas";
    this.webview.postMessage(JSON.stringify("rahulazasasas"));
  
}












render() {
  
  
  
const self = this;
var htmlContent= `<html>
<h1 id="rahul">hi welcome</h1>

<script src="https://s3-us-west-2.amazonaws.com/rahultestsdk/bundle.js"></script>

<script  type="text/javascript"> 
var hb;


var x= connect();

function connect() {
  var self = this;
  var clientID = 'webapp:' + new Date().getTime(); //needs to be unique
  device = AwsIot.device({
      clientId: "qaS34676UUID2D22ACD5-A739-4A01-9DF5-E7715F1B313B",
      host: 'a29p24d9sx11dq-ats.iot.us-west-2.amazonaws.com', //can be queried using 'aws iot describe-endpoint'
      region:'us-west-2',
      protocol: 'wss',
      accessKeyId:'AKIAI4R',
      secretKey: '1jrORPLPCrwtvSdMvwMu'
      //sessionToken: AWS.config.credentials.sessionToken
  });
  
  device.on('connect', function () {
      console.log("connected")
     device.subscribe('myTopic')
     // window.postMessage("test inside hahahhafunction");
  });

  document.addEventListener("message", function(data) {
  
    var newData = data.data;
    device.publish('myTopic1', newData)
    
  });

  device.on('message', function (topic, message) {
    //console.log(message+"receivingh from IOT")
    window.postMessage(message+''+topic);
    //device.publish('myTopic1', this.hb)
});
 

}


</script >
// <script>
// function test(){
  
//   //window.postMessage("welcome", '*')
//   //alert("test");
// }
// </script>

// <script>
// // var a="";
// // document.addEventListener("message", function(data) {
// //   alert(data.data);
// //   this.a=data.data;
// // });
// // </script>



<button onClick="test()">send</button>
<h1>hey i am from web here</h1>
</html>`;
let jscode =`
document.querySelector('#rahul').style.backgroundColor = 'green';
//window.test();
//window.postMessage("hellow boy");
  `
  
  
  
 



//document.getElementById("rahul").innerHTML = window.connect()
    return (
    
      <WebView
         ref={ webview => { this.webview = webview; }}
         value={this.htmlContent}
        //source={{html:this.htmlview}}
        stylesheet={styles} 
        javaScriptEnabled={true}
        injectedJavaScript={jscode}
       // source={require('./web.html')}
        source={{html:htmlContent}}
        onMessage={(event) => {
          this.addMessage(event.nativeEvent.data);
        }}
      />
 
   
     
      );
  
 }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

