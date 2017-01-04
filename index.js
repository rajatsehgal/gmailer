import nodemailer from 'nodemailer';
import xoauth2 from 'xoauth2';

let from, transporter;

function validate(args, props) {
  props.forEach(prop => {
    if (typeof args[prop] !== 'string') {
      throw new Error(`A '${prop}' needs to be provided!`);
    }
  });
}

function _init(args) {
  if (transporter) {
    throw new Error('gmailer has already been initialized!');
  }

  validate(args, ['name', 'email']);

  from = `${args.name}<${args.email}>`;
}

const gmailer = {
  init(args) {
    _init(args);
    validate(args, ['password']);

    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: args.email,
        pass: args.password
      }
    });
  },

  initOAuth(args) {
    _init(args);
    validate(args, ['clientId', 'clientSecret', 'refreshToken', 'accessToken']);

    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: args.email,
            clientId: args.clientId,
            clientSecret: args.clientSecret,
            refreshToken: args.refreshToken,
            accessToken: args.accessToken
        })
      }
    });
  },

  send(args, callback) {
    if (!transporter) {
      throw new Error('gmailer needs to be initialized first!');
    }

    validate(args, ['to', 'subject', 'text']);

    args.from = from;

    transporter.sendMail(args, callback);
  }
};

export default gmailer;
