export const email_validation = 
{
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email fora do padrão',
  },
}

export const password_validation =  
{
  minLength: {
    value: 6,
    message: 'min 6 characters',
  },
}

export const name_validation =  
{
  pattern: {
    value:
      /[A-Z][a-z]*(\s[A-Z][a-z]*)*/,
    message: 'Iniciado com letra maiúscula',
  },
}