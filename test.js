const awsIot = require('./bundle');
const html=require('/Users/razme001/Documents/Programmes/ReactWebView/web.html');
console.log("hey you how are you"+html);
module.exports = awsIot;


/*
import React from 'react';
import { StyleSheet, Text, View,WebView, HTMLView, Button } from 'react-native';
//import  htmlcontent from '';
//import AwsIot from './bundle.js';
//import { WebView } from 'react-native-webview-messaging/WebView';



var WEBVIEW_REF = 'webview';



export default class App extends React.Component {
 



 
  componentDidMount() {
   // console.log("Helloodxnaksnkda"+window.AwsIot.device)
 /*    
     hello(); 
    function hello(){
        device = AwsIot.device({
        clientId: "qaS34676UUID2D22ACD5-A739-4A01-9DF5-E7715F1B313B1",
        host: 'a29p24d9sx11dq-ats.iot.us-west-2.amazonaws.com', //can be queried using 'aws iot describe-endpoint'
        region:'us-west-2',
        protocol: 'wss',
        accessKeyId:'AKIAI4',
        secretKey: '1jrORPLPCrw'
    //sessionToken: AWS.config.credentials.sessionToken
          });

        device.on('connect', function () {
             console.log("connected")
            device.publish('native', 'xxxxx success!')
   
            });
          }
 

}









render() {
  
  
  
const self = this;
var htmlContent= `<html>
<h1 id="rahul">hi welcome</h1>

<script src="https://s3-us-west-2.amazonaws.com/rahultestsdk/bundle.js"></script>

<script  type="text/javascript"> 

var x= connect();
function connect() {
  var clientID = 'webapp:' + new Date().getTime(); //needs to be unique
  device = AwsIot.thingShadow({
      clientId: "qaS34676UUID2D22ACD5-A739-4A01-9DF5-E7715F1B313B",
      host: 'a29p24d9sx11dq-ats.iot.us-west-2.amazonaws.com', //can be queried using 'aws iot describe-endpoint'
      region:'us-west-2',
      protocol: 'wss',
      accessKeyId:'AKIAI',
      secretKey: '1jrORPL'
      //sessionToken: AWS.config.credentials.sessionToken
  });

  device.on('connect', function () {
      console.log("connected")
      device.publish('myTopic', 'xxxxx success!')
     
  });
//   function publishMessage(device, topic, msg) {
//       device.publish(topic, msg, { qos: 1 }, function (err) {
//           if (err) {
//               alert("failed to publish iot message!");
//               console.error(err);
//           } else {
//               console.log("published to demoTopic");
//               showMessage("Message Published", "Topic: " + topic, "Message: " + msg);
//           }
//       });
//   }

}
document.getElementById("rahul").innerHTML = hello();
//window.connect();
</script >

<h1>hey i am from web here</h1>
</html>`;
let jscode =`
document.querySelector('#rahul').style.backgroundColor = 'green';

//window.postMessage("Sending data from WebView");
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
        //onMessage={this.onWebViewMessage}
      />
 
   
     
      );
  
 }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




*/