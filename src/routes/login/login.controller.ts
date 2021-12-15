import { Controller, Get, Post, All, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('login')
export class LoginController {
  // constructor() {}

  @All()
  index(@Req() request: Request): string {
    let result = '';
    switch (request.method) {
      case 'POST':
        result = this.loginPOST(request);
        break;
      default:
        result = this.loginGET(request);
        break;
    }
    return result;
  }

  private loginGET(@Req() request: Request): string {
    return `
        <h1>Login</h1>
        <form action="/login" method="post">
          <p>Name: <input name="name" value="nest"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
        </form>
      `;
  }

  private loginPOST(@Req() request: Request) {
    if (request.body.name === 'nest' && request.body.password === '123456') {
      return `<h1>Login Succeed</h1>`;
    } else {
      return `<h1>Login Failed</h1>`;
    }
  }
}
