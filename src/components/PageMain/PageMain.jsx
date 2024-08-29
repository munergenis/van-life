const PageMain = ({ children, className, img }) => {
  return (
    <main
      style={{ backgroundImage: `url(${img})` }}
      className={`flex-1 ${className} ${img && 'bg-cover bg-right bg-blend-overlay'}`}
    >
      {children}
    </main>
  )
}
export default PageMain
