interface User {
  name: string
  email: string
  password: string
}

interface Token {
  refresh: string
  accessToken: string
}

interface CreateUser extends User {
  confirmPassword: string
}
