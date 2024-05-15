# Fluent style processing benchmark

This repo is a small benchmark to compare the status quo of Fluent v9 preprocessing Griffel styles with a proposal to stop shipping pre-processed styles.

## Methodology

Tests are run with [Tensile](https://github.com/microsoft/tensile-perf), a stress test benchmarking tool.

There are two test categories:

1. "with style processing": the way Fluent is currently shipped with Griffel AOT. This is the baseline case.
2. "no processing": a patched version of Fluent that disables Griffel AOT.
    1. Artifacts are produced by disabling [this line](https://github.com/microsoft/fluentui/blob/master/scripts/tasks/src/presets.ts#L104) and [this line](https://github.com/microsoft/fluentui/blob/master/scripts/tasks/src/presets.ts#L123).

Components are imported directly from their packages rather than from the Fluent suite package. E.g.:

```javascript
// import this way
import { Button } from '@fluentui/react-button';
// rather than
import { Button } from '@fluentui/react-components';
```

Packages are [aliased](https://classic.yarnpkg.com/lang/en/docs/cli/add/#toc-yarn-add-alias) for the "with style processing" case with `@fluentui/react-button` being aliased to `react-button` and so forth.

Pacakges are [patched](https://www.npmjs.com/package/patch-package) for the "no processing" case to eliminate the AOT step in the build.

## Setup

1. Clone this repo
2. Install deps: `yarn` (this will handle aliasing and apply patches for you)

## Usage

View the `scripts` block in `package.json` for the test cases.

1. Test cases prefixed with `bench:` are "with style processing"
2. Test cases prefixed with `bench-no-process:` are "no processing"

Results are written to the `.tensile/results` folder in the JSON file named for the test. The `processedMeasurments` node rolls up the various measurements.
