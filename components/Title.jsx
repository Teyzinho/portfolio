
const Title = ({title, subTitle}) => {
  return (
    <div className="text-center pt-8">
        <h1 className="font-semibold text-4xl sm:text-6xl tracking-tight">{title}</h1>
        <p className="font-light text-lg sm:text-xl pt-4 tracking-tight">{subTitle}</p>
    </div>
  )
}

export default Title