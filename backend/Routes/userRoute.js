import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';
import User from '../Models/userModel.js';
import { mobNoVerification } from '../utils.js';

const userRouter = express.Router();

function sendEmail(userInfo) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pethkartusharnarendra@gmail.com',
        pass: 'mswlvrhfjblhyzdj',
      },
    });
    const mail_configs = {
      from: process.env.Email,
      to: userInfo.email,
      subject: 'Form is submitted successfully',
      text: ``,
      html: `Hello Mr./Mrs. ${userInfo.name.toUpperCase()} thank you for visiting the website.
      \nIf you want to explore more things about me please see my 
      <a href="https://portfolio-tushar.vercel.app/">Portfolio website</a>. 
      You will find my contact in my portfolio.
      \n<h3>Your Info</h3><h4>Name: ${userInfo.name.toUpperCase()}</h4><h4>Email: ${
        userInfo.email
      }</h4>
      <h4>Dob: ${userInfo.dob.substr(0, 10)}</h4><h4>Mobile No.: ${
        userInfo.mobileNo
      }</h4>`,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        return reject({ message: 'An Error has occured' });
      }
      return resolve({ message: 'Email sent successfully' });
    });
  });
}

userRouter.post(
  '/user-form',
  mobNoVerification,
  expressAsyncHandler(async (req, res) => {
    const userInfo = req.body;
    sendEmail(userInfo)
      .then(async (response) => {
        if (response.message === 'Email sent successfully') {
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            mobileNo: req.body.mobileNo,
            dob: req.body.dob,
          });
          const user = await newUser.save();
        }
        res.send(response.message);
      })
      .catch((error) => res.status(500).send(error.message));
  })
);

userRouter.get(
  '/getUsers',
  expressAsyncHandler(async (req, res) => {
    const users = await User.find();
    res.send(users);
  })
);

// userRouter.get(
//   '/removeUsers',
//   expressAsyncHandler(async (req, res) => {
//     await User.remove({});
//     res.send('succesfully deleted');
//   })
// );

export default userRouter;
