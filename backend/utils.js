export const mobNoVerification = (req, res, next) => {
  var phoneno = /^\d{10}$/;
  if (String(req.body.mobileNo).match(phoneno)) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Mobile Number' });
  }
};
