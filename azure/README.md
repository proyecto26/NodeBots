# Azure and the Internet of Things :)
  http://slides.com/juandavidnicholls/azure-iot/

# [Azure IoT Suite](https://www.azureiotsuite.com/)
* Device Connectivity & Management
* Gateway Edge Intelligence
* Data Ingestion and Command & Control
* Stream Processing & Predictive Analytics
* Workflow Automation and Integration
* Dashboards and Visualization
* Preconfigured Solutions
  - Remote Monitoring
  - Predictive Maintenance (Machine Learning)

# Azure IoT Services
* IoT Hub
* Table, Blob and Storage
* Stream Analytics
* Azure Websites and Power BI

# Azure IoT Hub
Connect, monitor and manage your devices **(multi-scale)**
* Security
* Cloud-scale messaging
* Cloud-facing feedback
* Operations Monitoring
* Connection multiplexing
* Multi-protocol
* Multi-platform

# Tools
* **Device Explorer (Windows):** https://github.com/Azure/azure-iot-sdk-csharp/tree/master/tools/DeviceExplorer
* **IoT Hub Explorer:** https://github.com/Azure/iothub-explorer

# Commands

Command                                  | Action
-------------------------------------    | -----------
`npm install -g iothub-explorer`         | Install IoT Hub Explorer tool.
`iothub-explorer login "HostName=..."`   | Start a session on your IoT hub.
`iothub-explorer list`                   | List the device identities.
`iothub-explorer create deviceName --connection-string` | Register a new device and get its connection string from the device identity registry in your IoT hub.
`iothub-explorer delete deviceName`          | Delete a device from the device identity registry in your IoT hub.
`iothub-explorer monitor-events deviceName --login "HostName=..."` | Monitoring events from device.
`iothub-explorer send deviceName "Hello World" --ack=full` | Send a cloud-to-device message.
`iothub-explorer monitor-feedback deviceName` | Wait for a respond of the device.
