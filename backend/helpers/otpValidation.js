const otpVerification = async (otpTime) => {
  try {
    console.log("Milliseconds: " + otpTime);

    const cDateTime = new Date();
    var differenceValue = (otpTime - cDateTime.getTime()) / 1000;
    differenceValue /= 60;

    const minutes = Math.abs(differenceValue);

    console.log("Expired Minute: " + minutes);

    if (minutes > 2) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default otpVerification;
