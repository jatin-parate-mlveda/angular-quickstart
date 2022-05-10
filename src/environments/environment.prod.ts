import environment_variables from 'src/environment_variables';

export const environment: { [key: string]: any } = {
  ...environment_variables,
  production: true,
};
