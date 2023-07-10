export function SelectLabel({ label, id }) {
  return(
    label && 
        
      <label htmlFor={id}>
        {label}
      </label>
    
  );
}