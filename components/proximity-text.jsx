export function ProximityText({
  children,
  className = ""
}) {
  return (
    <span className={`proximity-text ${className}`}>
      {children}
    </span>
  );
}
