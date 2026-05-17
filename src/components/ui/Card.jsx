import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({
  children,
  variant = 'dark',
  to,
  className = '',
  as: Tag = 'article'
}) {
  const classes = `card card--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={`${classes} card--link`}>
        {children}
      </Link>
    );
  }

  return <Tag className={classes}>{children}</Tag>;
}

export function CardEyebrow({ children }) {
  return <span className="card__eyebrow">{children}</span>;
}

export function CardTitle({ children }) {
  return <h3 className="card__title">{children}</h3>;
}

export function CardBody({ children }) {
  return <p className="card__body">{children}</p>;
}

export function CardFooter({ children }) {
  return <div className="card__footer">{children}</div>;
}
