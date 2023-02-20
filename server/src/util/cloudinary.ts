// @typescript-eslint/camelcase
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

// CLoudinary config
const cloudinary = require('cloudinary').v2
cloudinary.config({
  /* eslint-disable  @typescript-eslint/camelcase */
  cloud_name: "dyayfb8hl",
  api_key: "898262629447194",
  api_secret: "xrs53cLS4Y5yCdeobHDBOc3SRgM"
  /* eslint-enable  @typescript-eslint/camelcase */
})

module.exports = { cloudinary }
