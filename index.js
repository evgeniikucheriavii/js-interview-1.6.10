const _ = require('lodash')

function fetchGracePeriodLogicFromMapping (cardId, mapping = '') {
    let result = ''

    mapping = mapping.replaceAll(' ', '')

    let options = mapping.split(';')

    options.forEach((option) => {
        if(option === '') return;

        let opt = option.split(':')
        let name = opt[0]
        let vals = opt[1].split(',')
        vals.forEach((val) => {
            if(cardId === val) {
                result = name
            }
        })
    })

    return result === '' ? null : result
}

module.exports = fetchGracePeriodLogicFromMapping
