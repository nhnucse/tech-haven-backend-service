import Validator from 'validatorjs';

export function validate(data, rules, messages ) {
  let validation = new Validator(data, rules);
  if (validation.fails()) {
    const errors = {
      status: 400,
      data: {
        errors: {
          "invalid-params": validation.errors.all()
        }
      },
      error: {
        code: 40001,
        data: {
          "invalid-params": validation.errors.all()
        }
      }
    };
    throw errors;
  }
  return true;
}
