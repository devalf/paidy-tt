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

const schema = yup.object().shape({
  [FomFields.Email]: yup.string().required('Required').email('Invalid email'),
  [FomFields.PhoneNumber]: yup
    .string()
    .required('Required')
    // here you can see very rough validation for phone number, but it's enough for our purposes as example
    .matches(/^\+?(?:\d[- ]?){7,12}$/, 'Incorrect phone number'),
});

export const OrderForm: React.FC = () => {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      [FomFields.Email]: '',
      [FomFields.PhoneNumber]: '',
      [FomFields.SkipNextTime]: false,
    },
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          value={values.email}
          name={FomFields.Email}
          type={'text'}
          onChange={handleChange}
          label={'メールアドレス'}
          error={errors[FomFields.Email]}
        />
        <InputField
          value={values.phoneNumber}
          name={FomFields.PhoneNumber}
          type={'text'}
          onChange={handleChange}
          label={'携帯電話番号'}
          error={errors[FomFields.PhoneNumber]}
        />
        <InputField
          value={values.skipNextTime as unknown as string}
          name={FomFields.SkipNextTime}
          type={'checkbox'}
          onChange={handleChange}
          label={'次回から入力を省略 '}
        />

        <div className={'order-form-footer'}>
          <div>
            <a href='#' className={'form-link'}>
              利用規約・個人情報取扱条項に同意して
            </a>
          </div>
          <button type='submit' className={'ct-button-styled order-form-submit-btn'}>
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
