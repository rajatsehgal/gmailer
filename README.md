# gmailer
A module that provides the capability to send emails through a gmail account.

## Installation
```
npm install @rajatsehgal/gmailer --save
```

## Usage

```js
import gmailer from '@rajatsehgal/gmailer';

// Using email and password
gmailer.init({
  name: 'Your Name',
  email: 'you@gmail.com',
  password: 'supersecret'
});

// Or using Oauth2
gmailer.initOAuth({
  name: 'Your Name',
  email: 'you@gmail.com',
  clientId: 'Your Client ID',
  clientSecret: 'Your Client Secret',
  refreshToken: 'Your Refresh Token',
  accessToken: 'Your Access Token'
});

gmailer.send({
  to: 'someone@gmail.com',
  subject: 'Testing gmailer',
  text: 'Hello from gmailer!'
});
```
