export function SelectInput({ placeholder, className, ...rest }) {
  return(
    <input
      className='select-input' 
      type='text' 
      placeholder={placeholder}
      {...rest}
    />
  );
}