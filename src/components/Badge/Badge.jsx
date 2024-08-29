const Badge = ({ children, className, colorStyle }) => {
  return (
    <span className={`rounded-md px-4 py-2 text-center font-bold ${className} ${colorStyle || 'bg-orange-200 text-neutral-600'}`}>{children}</span>
  )
}
export default Badge
