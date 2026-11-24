import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line excuse a developer gives when code breaks in
// production: the classic "it passed every test" defence, turned on the
// twist that the tests never included the one thing production has and
// staging does not — actual users.
const TEXT =
  "It passed every test — unfortunately, the users weren't in the test suite.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-200 characters. Fail loudly
// instead of writing an invalid entry if the text is ever edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry text must be 1-200 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
