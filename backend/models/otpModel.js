import mongoose from "mongoose";
///define schema for collection////

const otpSchema = new mongoose.Schema({
  phoneNumber: String,
  otp: String,
  otpExperation: {
    type: Date,
    default: Date.now,
    get: (otpExperation) => otpExperation.getTime(),
    set: (otpExperation) => new Date(otpExperation),
  },

  date: { type: Date, default: Date.now },
});

/// creating a modal///

const Otp = mongoose.model("otp", otpSchema);
export default Otp;
