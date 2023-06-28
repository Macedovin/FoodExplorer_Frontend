export const email_validation = 
{
/*   required: {
    value: true,
    message: 'Requerido'
  }, */
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email fora do padrão',
  },
}

export const password_validation =  
{
/*   required: {
    value: true,
    message: 'Requerido',
  }, */
  minLength: {
    value: 6,
    message: 'min 6 characters',
  },
}