import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { InputField } from '../Form';

import './OrderForm.css';

enum FomFields {
  Email = 'email',
  PhoneNumber = 'phoneNumber',
  SkipNextTime = 'skipNextTime',
}

/**
 * Validation schema for form with Yup library
 * for validation phone number used regex with very basic validation approach just to cover test task requirements
 */
const schema = yup.object().shape({
  [FomFields.Email]: yup.string().required('Required').email('Invalid email'),
  [FomFields.PhoneNumber]: yup
    .string()
    .required('Required')
    // here you can see very rough validation for phone number, but it's enough for our purposes as example
    .matches(/^\+?(?:\d[- ]?){7,12}$/, 'Incorrect phone number'),
});

/**
 * Order Form component
 * as main form handler used formik library with Yup library for validation
 */
export const OrderForm: React.FC = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      [FomFields.Email]: '',
      [FomFields.PhoneNumber]: '',
      [FomFields.SkipNextTime]: false,
    },
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: (values) => {
      // just to see values in console on submit
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          value={values[FomFields.Email]}
          name={FomFields.Email}
          type={'text'}
          onChange={handleChange}
          onBlur={handleBlur}
          label={'メールアドレス'}
          error={touched[FomFields.Email] ? errors[FomFields.Email] : undefined}
          dataTestId={'email_input_field'}
        />
        <InputField
          value={values[FomFields.PhoneNumber]}
          name={FomFields.PhoneNumber}
          type={'text'}
          onChange={handleChange}
          onBlur={handleBlur}
          label={'携帯電話番号'}
          error={touched[FomFields.PhoneNumber] ? errors[FomFields.PhoneNumber] : undefined}
          dataTestId={'phone_number_input_field'}
        />
        <InputField
          value={values[FomFields.SkipNextTime] as unknown as string}
          name={FomFields.SkipNextTime}
          type={'checkbox'}
          onChange={handleChange}
          label={'次回から入力を省略 '}
          dataTestId={'skip_next_time_input_field'}
        />

        <div className={'order-form-footer'}>
          <div>
            <a href='#' className={'form-link'}>
              利用規約・個人情報取扱条項に同意して
            </a>
          </div>
          <button
            type='submit'
            className={'ct-button-styled order-form-submit-btn'}
            data-testid={'submit_button'}
          >
            次へ
          </button>
          <div>
            <a href='#' className={'form-link'}>
              ヘルプ
            </a>
            <a href='#' className={'form-link'}>
              ヘルプ
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
