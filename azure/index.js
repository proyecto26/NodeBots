// Import the interface to Tessel hardware
var tessel = require('tessel');
var deviceConfig = require('./deviceConfig');
var azureDevice = require('azure-iot-device');
var azureDeviceHttp = require('azure-iot-device-http');

var clientFromConnectionString = azureDeviceHttp.clientFromConnectionString;
var Message = azureDevice.Message;

var deviceId = 'tessel';

//Connect the device via wifi...
//t2 wifi -n "AndroidAP" -p "jvmm6243"

deviceConfig.getDeviceInfo(deviceId).then(function(deviceInfo){
  //console.log('Device ID: ' + deviceInfo.deviceId);
  //console.log('Device key: ' + deviceInfo.authentication.symmetricKey.primaryKey);

  console.log(deviceInfo);
  var connectionString = "HostName=iothubtessel.azure-devices.net;DeviceId=" + deviceId + ";SharedAccessKey=" + deviceInfo.authentication.symmetricKey.primaryKey;
  var client = clientFromConnectionString(connectionString);
  
  sendMessage(client)

}).catch(function(err){
  console.error(err);
})

/**
 * Send a message to the IoT Hub
 */
var sendMessage = function(client){
  var windSpeed = 10 + (Math.random() * 4); // range: [10, 14]
  var temperature = 20 + (Math.random() * 10); // range: [20, 30]
  var humidity = 60 + (Math.random() * 20); // range: [60, 80]
  var data = JSON.stringify({ deviceId: deviceId, windSpeed: windSpeed, temperature: temperature, humidity: humidity });
  var message = new Message(data);

  //Send additional properties with the message
  message.properties.add('temperatureAlert', (temperature > 28) ? 'true' : 'false');
  console.log('Sending message: ' + message.getData());
  client.sendEvent(message);
};

/**
 * Send messages to the IoT Hub as a batch.
 */
var sendMessages = function(){
  var data = [
    { id: 1, message: 'hello' },
    { id: 2, message: 'world' }
  ];
  var messages = [];
  data.forEach(function (value) {
    messages.push(new Message(JSON.stringify(value)));
  });

  console.log('sending ' + messages.length + ' events in a batch');

  client.sendEventBatch(messages);
};