function zerosFormatter (value, valueLength) {
  let valueString = value.toString()

  if (valueString.length !== valueLength) {
    const length = valueLength - valueString.length
    for (let i = 0; i < length; i++) {
      valueString = `0${valueString}`
    }
  }
  return valueString
}

const getTimeFormat = {
  methods: {
    getTimeDateFormatEpoch (epoch) {
      if (epoch !== ' ') {
        const date = new Date((epoch))
        let hours = date.getHours()
        // const suffix = (hours >= 12) ? 'PM' : 'AM'

        // hours = (hours > 12) ? hours - 12 : hours
        hours = hours === '00' ? 12 : hours
        return ` ${zerosFormatter(date.getFullYear(), 2)}-${zerosFormatter((date.getMonth() + 1), 2)}-${date.getDate()} ${zerosFormatter(hours, 2)}:${zerosFormatter(date.getMinutes(), 2)}:${zerosFormatter(date.getSeconds(), 2)}` // eslint-disable-line max-len
      }
      return epoch
    },
    getTimeFormatEpoch (epoch) {
      if (epoch !== ' ') {
        const date = new Date((epoch))
        let hours = date.getHours()
        // const suffix = (hours >= 12) ? 'PM' : 'AM'

        // hours = (hours > 12) ? hours - 12 : hours
        hours = hours === '00' ? 12 : hours
        return ` ${zerosFormatter(hours, 2)}:${zerosFormatter(date.getMinutes(), 2)}:${zerosFormatter(date.getSeconds(), 2)}` // eslint-disable-line max-len
      }
      return epoch
    },
    getDateFormatEpoch (epoch) {
      if (epoch !== ' ') {
        const date = new Date((epoch))
        return ` ${zerosFormatter(date.getDate(), 2)}/${zerosFormatter((date.getMonth() + 1), 2)}/${date.getFullYear()}` // eslint-disable-line max-len
      }
      return epoch
    }
  }
}

export default getTimeFormat
