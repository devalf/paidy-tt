import React from 'react';

import { InputField } from '../InputField';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

/**
 * Example of Unit testing
 */
describe('Testing Form Components', () => {
  const value = 'a';
  const name = 'testing';
  const type = 'text';

  test('InputField should renders properly', () => {
    const onChange = jest.fn();
    const testInputId = 'test_input';

    const { getByTestId } = render(
      <InputField
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        dataTestId={testInputId}
      />,
    );

    const result = getByTestId(testInputId);

    expect(result).toBeInTheDocument();
    expect(result).toHaveAttribute('value', value);
    expect(result).toHaveAttribute('name', name);
    expect(result).toHaveAttribute('type', type);
  });

  test('InputField should call `onChange`', async () => {
    const onChange = jest.fn();
    const testInputId = 'test_input';

    const { getByTestId } = render(
      <InputField
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        dataTestId={testInputId}
      />,
    );

    const result = await getByTestId(testInputId);

    await act(() => {
      fireEvent.change(result, {
        target: { value: 'b' },
      });
    });

    expect(onChange).toHaveBeenCalled();
  });
});
