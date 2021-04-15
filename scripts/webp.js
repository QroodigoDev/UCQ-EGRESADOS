const path = require('path')
const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

const webp = async () => {
  const input = path.join(__dirname, '..', 'src/assets/img/*.{jpg,png}')
  const output = path.join(__dirname, '..', 'src/assets/img')
  console.log(input, output)
  const files = await imagemin([input], {
    destination: output,
    plugins: [
      imageminWebp({ quality: 75 })
    ]
  })
  console.log(files)
  console.log('Images optimized')
}

webp()
