function guidS4() {
  return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
}
function generateGuid() {
  return (
    guidS4() +
    guidS4() +
    "-" +
    guidS4() +
    "-" +
    guidS4() +
    "-" +
    guidS4() +
    "-" +
    guidS4() +
    guidS4() +
    guidS4()
  );
}
