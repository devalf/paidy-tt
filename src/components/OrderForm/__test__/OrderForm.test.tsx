import React from 'react';
import { OrderForm } from '../OrderForm';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

/**
 * Example of Integration testing
 *
 * -- In my opinion, this kind of testing better done with e2e testing via headless browser testing tools
 * -- like Cypress or Selenium
 */
describe('Order Form testing', () => {
  test('Testing form normal flow', async () => {
    const { getByTestId, getAllByText, getByText, container } = render(<OrderForm />);

    const form = container.querySelector('form');

    const emailInput = getByTestId('email_input_field');
    const submitBtn = getByTestId('submit_button');

    expect(form).toBeDefined();

    await act(() => {
      fireEvent.click(submitBtn);
    });

    const allRequiredElements = getAllByText('Required');

    expect(allRequiredElements.length).toEqual(2);

    await act(() => {
      fireEvent.change(emailInput, {
        target: { value: 'a' },
      });
    });

    const allInvalidEmail = getAllByText('Invalid email');

    expect(allInvalidEmail.length).toEqual(1);

    await act(() => {
      fireEvent.change(emailInput, {
        target: { value: 'a@b.c' },
      });
    });

    expect(() => getByText('Invalid email')).toThrow();
  });
});
