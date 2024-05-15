import * as React from 'react';
import { FluentProvider } from 'react-provider';
import { webLightTheme } from 'react-theme';
import { TestApp, tests } from '@tensile-perf/react';
import type { TestRenderParams } from '@tensile-perf/react';

const FluentTestApp: React.FC = ({ children }) => {
  return (
    <FluentProvider theme={webLightTheme}>
      <TestApp>{children}</TestApp>
    </FluentProvider>
  );
};

const wrappedTests = {};

for (const testName of Object.keys(tests)) {
  const test = tests[testName];

  wrappedTests[testName] = (params: Omit<TestRenderParams, 'TestWrapper'>) => {
    return test({ ...params, TestWrapper: FluentTestApp });
  }
};

export { wrappedTests as tests }

