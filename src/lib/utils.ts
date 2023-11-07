export function getGreetingMessage(currentTime: number) {
  if (currentTime >= 5 && currentTime < 12) {
    return 'Good morning';
  } else if (currentTime >= 12 && currentTime < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}

export function isDay(currentTime: number) {
  if (currentTime >= 5 && currentTime < 18) {
    return true;
  }

  return false;
}
