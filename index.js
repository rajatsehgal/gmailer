import nodemailer from 'nodemailer';

let from, transporter;

function validate(args, props) {
  props.forEach(prop => {
    if (typeof args[prop] !== 'string') {
      throw new Error(`A '${prop}' needs to be provided!`);
    }
  });
}

const gmailer = {
  init(args) {
    if (transporter) {
      throw new Error('gmailer has already been initialized!');
    }

    validate(args, ['name', 'email', 'password']);

    from = `${args.name}<${args.email}>`;
    transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: args.email,
        pass: args.password
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
