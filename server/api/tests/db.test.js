require("dotenv").config();
const mongoose = require("mongoose");

describe("MongoDB Connection", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("should connect successfully", () => {
    const state = mongoose.connection.readyState;
    // 1 = connected
    expect(state).toBe(1);
  });
});
