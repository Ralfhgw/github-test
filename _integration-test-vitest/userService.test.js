import { describe, it, expect, beforeEach } from "vitest";
import { UserService } from "./userService";
import { FakeDatabase } from "./fakeDatabase";

describe("Integration Test: UserService + FakeDatabase", () => {
  let service;

  beforeEach(() => {
    const db = new FakeDatabase();
    service = new UserService(db);
  });

  it("sollte einen User speichern und wiederfinden können", async () => {
    const newUser = await service.createUser("Alice");
    const fetchedUser = await service.getUser(newUser.id);
    expect(fetchedUser).toEqual(newUser);
  });

  it("sollte null zurückgeben, wenn User nicht existiert", async () => {
    const user = await service.getUser(12345);
    expect(user).toBeNull();
  });
});