const azure = require('azure')

let connection = 'Endpoint=sb://PC0025.interativa.com/ServiceBusDefaultNamespace;StsEndpoint=https://PC0025.interativa.com:9355/ServiceBusDefaultNamespace;RuntimePort=9354;ManagementPort=9355'
let serviceBusService = azure.createServiceBusService(connection)

module.exports = serviceBusService