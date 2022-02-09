var clientId = "ws" + Math.random(); 
// Create a client instance
var client = new Paho.MQTT.Client("35.247.218.237", 8083, clientId);

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});
acelerX = 0;
acelerY = 0;
acelerZ = 0;
acelerX2 = 0;
acelerY2 = 0;
acelerZ2 = 0;



// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("Conectado MQTT-WebSocket");
    client.subscribe("IoT/ACX");    
    client.subscribe("IoT/ACY");
    client.subscribe("IoT/ACZ");
    client.subscribe("IoT/ACX2");    
    client.subscribe("IoT/ACY2");
    client.subscribe("IoT/ACZ2");


    }

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("Conexión perdida:"+responseObject.errorMessage);
  }
}


// called when a message arrives
function onMessageArrived(message) {
  console.log(message.destinationName + ": " + message.payloadString);
    
  if(message.destinationName == 'IoT/ACX')
    {
         //document.getElementById("AcX").textContent =  message.payloadString ;
        acelerX = parseFloat(message.payloadString);
    } 
    if(message.destinationName == 'IoT/ACY')
    {
        // document.getElementById("AcY").textContent =  message.payloadString ;
        acelerY = parseFloat(message.payloadString);
    } 
    if(message.destinationName == 'IoT/ACZ')
    {
         //document.getElementById("AcZ").textContent =  message.payloadString ;
        acelerZ = parseFloat(message.payloadString);
    } 
    if(message.destinationName == 'IoT/ACX2')
    {
         //document.getElementById("AcX").textContent =  message.payloadString ;
        acelerX2 = parseFloat(message.payloadString);
    } 
    if(message.destinationName == 'IoT/ACY2')
    {
        // document.getElementById("AcY").textContent =  message.payloadString ;
        acelerY2 = parseFloat(message.payloadString);
    } 
    if(message.destinationName == 'IoT/ACZ2')
    {
         //document.getElementById("AcZ").textContent =  message.payloadString ;
        acelerZ2 = parseFloat(message.payloadString);
    } 
}
