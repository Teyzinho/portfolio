
const Button = ({title, className}) => {
  return (
    <button className={`bg-gray-950 text-white px-8 py-3 rounded-2xl font-semibold ${className}`}>
        {title}
    </button>
  )
}

export default Button