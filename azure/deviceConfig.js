// Import Azure IoT Hub
var iothub = require('azure-iothub');
var Promise = require('bluebird');

var connectionString = 'HostName=iothubtessel.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=upqIBn7/RdFDU6JaNDWQJbtO+6SUc/WVqzj4gjHDE9s=';
var registry = iothub.Registry.fromConnectionString(connectionString);
var device = new iothub.Device(null);

/**
 * Get device info from Azure IoT Registry
 */
var _getDeviceInfo = function (deviceId, cb) {
  device.deviceId = deviceId;
  return new Promise((resolve, reject) => {
    registry.create(device, function (err, deviceInfo, res) {
      if (err) {
        registry.get(device.deviceId, getExistingDevice);
      }
      else {
        if (cb) { cb(null, deviceInfo); }
        resolve(deviceInfo);
      }
    });

    var getExistingDevice = function (err, deviceInfo, res) {
      if (err) {
        if (cb) { cb(err); }
        reject(err);
      }
      else {
        if (cb) { cb(null, deviceInfo); }
        resolve(deviceInfo);
      }
    };
  });
}

module.exports = {
  getDeviceInfo: _getDeviceInfo
}