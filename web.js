
<h1>hey i am from web here</h1>
 
 function connect() {
      clientID = 'webapp:' + new Date().getTime(); //needs to be unique
      device = AwsIot.device({
          clientId: clientID,
          host: '<YOUR_AWS_IOT_ENDPOINT>', //can be queried using 'aws iot describe-endpoint'
          protocol: 'wss',
          accessKeyId: AWS.config.credentials.accessKeyId,
          secretKey: AWS.config.credentials.secretAccessKey,
          sessionToken: AWS.config.credentials.sessionToken
      });
      device.on('connect', function () {
          console.log("connected")
          //publishMessage(device, 'demoTopic', 'demo success!')
      });
      function publishMessage(device, topic, msg) {
          device.publish(topic, msg, { qos: 1 }, function (err) {
              if (err) {
                  alert("failed to publish iot message!");
                  console.error(err);
              } else {
                  console.log("published to demoTopic");
                  showMessage("Message Published", "Topic: " + topic, "Message: " + msg);
              }
          });
      }
 }     

<button onclick="this.connect()">connect</button>

