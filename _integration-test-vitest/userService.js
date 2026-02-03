export class UserService {
  constructor(database) {
    this.db = database;
  }

  async createUser(name) {
    const user = { id: Date.now(), name };
    await this.db.save(user);
    return user;
  }

  async getUser(id) {
    return this.db.findById(id);
  }
}