import { getGreetingMessage, isDay } from './utils';

describe('isDay', () => {
  it('should return true when currentTime is between 5 and 17', () => {
    // Arrange
    const currentTime = 10;

    // Act
    const result = isDay(currentTime);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false when currentTime is less than 5', () => {
    // Given
    const currentTime = 3;

    // When
    const result = isDay(currentTime);

    // Then
    expect(result).toBe(false);
  });
});

describe('getGreetingMessage', () => {
  it('should return Good Morning when currentTime is between 5 and 11', () => {
    const currentTime = 8;

    const result = getGreetingMessage(currentTime);

    expect(result).toBe('Good morning');
  });

  it('should return Good afternoon when currentTime is between 12 and 18', () => {
    const currentTime = 16;

    const result = getGreetingMessage(currentTime);

    expect(result).toBe('Good afternoon');
  });

  it('should return Good evening when currentTime is between 18 and 23', () => {
    const currentTime = 21;

    const result = getGreetingMessage(currentTime);

    expect(result).toBe('Good evening');
  });
});
