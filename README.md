# gmailer
A module that provides the capability to send emails through a gmail account.

## Installation
```
npm install @rajatsehgal/gmailer --save
```

## Usage

```js
import gmailer from '@rajatsehgal/gmailer';

gmailer.init({
  name: 'Rajat Sehgal',
  email: 'rajatsehgal1988@gmail.com',
  password: 'supersecret'
});

gmailer.send({
  to: 'someone@gmail.com',
  subject: 'Testing gmailer',
  text: 'Hello from gmailer!'
});
```
