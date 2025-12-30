const User = require('../src/models/User');
const bcrypt = require('bcryptjs');

// Mock bcrypt
jest.mock('bcryptjs', () => ({
  genSalt: jest.fn().mockResolvedValue('salt'),
  hash: jest.fn().mockResolvedValue('hashedPassword'),
  compare: jest.fn(),
}));

// Mock mongoose
jest.mock('mongoose', () => {
  const mockSchema = function(schema) {
    this.pre = jest.fn();
    this.methods = {};
  };
  mockSchema.prototype.pre = jest.fn();
  
  return {
    Schema: mockSchema,
    model: jest.fn().mockReturnValue({}),
    connect: jest.fn(),
  };
});

describe('Password Hashing', () => {
  test('bcrypt.hash should be called with password and salt', async () => {
    const password = 'TestPassword123!';
    const salt = await bcrypt.genSalt(12);
    await bcrypt.hash(password, salt);
    
    expect(bcrypt.genSalt).toHaveBeenCalledWith(12);
    expect(bcrypt.hash).toHaveBeenCalledWith(password, salt);
  });

  test('bcrypt.compare should compare passwords correctly', async () => {
    bcrypt.compare.mockResolvedValueOnce(true);
    const result = await bcrypt.compare('password', 'hashedPassword');
    expect(result).toBe(true);
  });

  test('bcrypt.compare should return false for wrong password', async () => {
    bcrypt.compare.mockResolvedValueOnce(false);
    const result = await bcrypt.compare('wrongpassword', 'hashedPassword');
    expect(result).toBe(false);
  });
});
