import { tap } from 'node:test/reporters';
import process from 'node:process';
import { run } from 'node:test';
import path from 'node:path';
import { TestsStream } from '../lib/internal/test_runner/tests_stream.js';

run({ files: [path.resolve('./custom_test_dir/test1.js')]})
.compose(tap)
.pipe(process.stdout);