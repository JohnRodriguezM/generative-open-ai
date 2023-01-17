import { render } from '@testing-library/react';
import { EthContributions } from '../../components/Contributions/Contributions';
import { describe, expect, test } from 'vitest';

describe('EthContributions component', () => {
  test('form is rendered correctly', () => {
    const { getByTestId } = render(<EthContributions />);
    expect(getByTestId('form')).toBeDefined();
    expect(getByTestId('address')).toBeDefined();
    expect(getByTestId('amount')).toBeDefined();
    expect(getByTestId('submit-button')).toBeDefined();
  });
});