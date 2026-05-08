import test from 'node:test';
import assert from 'node:assert/strict';

import { bootstrap } from './index.js';

test('bootstrap returns spawn world payload', () => {
  const app = bootstrap();

  assert.equal(app.world.id, 'spawn');
  assert.equal(app.world.name, 'Mall Exterior');
  assert.deepEqual(app.world.connectedTo, ['interchange']);
  assert.ok(app.startedAt);
});
