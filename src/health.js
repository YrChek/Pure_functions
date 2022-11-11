export default function healthLevel(array) {
  switch (true) {
    case array.health < 15: return 'critical';
    case array.health <= 50: return 'wounded';
    default: return 'healthy';
  }
}
