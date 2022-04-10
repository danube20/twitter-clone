const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    name: String,
    password: String,
    email: {
      type: String,
      unique: true
    },
    city: String,
    postalCode: Number
  },
  {
    timestamps: true,
  }
)
module.exports = model("User", userSchema)
