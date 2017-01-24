const serviceBusService = require('../index')

/** criação da msg
 * sempre possuem as propridades 'body' e 'customProperties'
 */
let message = {

    body: 'Test',
    customProperties: {
        propriedade: 'valor'
    }
    
}

// criação da queue
serviceBusService.createQueueIfNotExists('data1', function (error) {

    if (!error) {
        // msg enviada
        serviceBusService.receiveQueueMessage('data1', receivedMessage)
    } else {
        console.log(error)
    }

})

// envio da msg
serviceBusService.sendQueueMessage('data1', message, function (err) {

    if (err) {
        console.log(err)
    }

})