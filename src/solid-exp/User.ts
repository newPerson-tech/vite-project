const generateId = () => Date.now() * Math.random();

class UserRepository {
  save(user: User) {
    // збереження користувача у бд
  }
}

class UserLogger {
  log(user: User) {
    console.log(user);
  }
}

class UserController {
  send(user: User) {
    /* return http.send(); */
  }
}

class User {
  id: number;
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.id = generateId();
    this.username = username;
    this.password = password;
  }
}
