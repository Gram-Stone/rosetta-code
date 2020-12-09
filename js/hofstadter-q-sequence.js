function hofstadterQ(n) {
  return (n < 3) ? 1
  : hofstadterQ(n - hofstadterQ(n - 1)) + hofstadterQ(n - hofstadterQ(n - 2));
}