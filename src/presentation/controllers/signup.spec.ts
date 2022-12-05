import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Shoul return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'jey@mail.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }

    const response = sut.handle(httpRequest)
    expect(response.status).toBe(400)
    expect(response.body).toEqual(new Error("Missing param: 'name'"))
  })
})
