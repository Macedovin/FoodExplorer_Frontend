import { Link } from 'react-router-dom';

export function ConditionalLink({ to, children, isLink, ...rest}) {
  return (
    isLink ? <Link to={to} {...rest}>
      {children}
    </Link> : <>{children}</>
  )
}