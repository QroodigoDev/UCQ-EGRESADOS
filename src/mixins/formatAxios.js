const formatAxiosData = {
  methods: {
    toFormData (obj) {
      return new Promise((resolve, reject) => {
        console.log('toFormData', obj)
        const formData = new FormData()
        for (const key in obj) {
          formData.append(key, obj[key])
        }
        resolve(formData)
      })
    }
  }
}

export default formatAxiosData
