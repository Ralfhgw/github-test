export class FakeDatabase {
  constructor() {
    this.data = new Map();
  }

  async save(user) {
    this.data.set(user.id, user);
  }

  async findById(id) {
    return this.data.get(id) || null;
  }
}