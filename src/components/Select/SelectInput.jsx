export function SelectInput({ placeholder, className, ...rest }) {
  return(
    <input 
      type='text' 
      placeholder={placeholder}
      {...rest}
    />
  );
}