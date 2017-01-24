const serviceBusService = require('../index')

/** criação da variavel controladora
 * para não enviar msgs duplicadas
 */
let busy = false

//verificar a cada 2seg se possui msg na queue
setInterval(() => {

    if (!busy) {

        busy = true

        //criação do recebimento da msg
        serviceBusService.receiveQueueMessage('data1', function (error, receivedMessage) {

            if (!error) {
                //msg recebida
                console.log('Message: ', receivedMessage)
                //continuação das instruções
                busy = false
            } else {
                busy = false
            }

        })

    }

}, 2000)