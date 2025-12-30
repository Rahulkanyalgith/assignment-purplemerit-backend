const jwt = require('jsonwebtoken');

// Mock environment variable
process.env.JWT_SECRET = 'test-secret-key';
process.env.JWT_EXPIRE = '7d';

describe('JWT Token Generation', () => {
  test('should generate a valid JWT token', () => {
    const userId = '507f1f77bcf86cd799439011';
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
    expect(token.split('.')).toHaveLength(3); // JWT has 3 parts
  });

  test('should decode token correctly', () => {
    const userId = '507f1f77bcf86cd799439011';
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    expect(decoded.id).toBe(userId);
  });

  test('should throw error for invalid token', () => {
    expect(() => {
      jwt.verify('invalid-token', process.env.JWT_SECRET);
    }).toThrow();
  });

  test('should throw error for wrong secret', () => {
    const userId = '507f1f77bcf86cd799439011';
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET);

    expect(() => {
      jwt.verify(token, 'wrong-secret');
    }).toThrow();
  });
});
