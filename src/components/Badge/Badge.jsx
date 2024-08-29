const Badge = ({ children, className, colorStyle }) => {
  return (
    <span className={`rounded-md px-4 py-2 text-center font-bold text-neutral-600 ${className} ${colorStyle || 'bg-orange-200'}`}>{children}</span>
  )
}
export default Badge
