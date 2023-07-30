
const Button = ({title, className, type}) => {
  return (
    <button 
      className={`bg-gray-950 text-white px-8 py-3 rounded-2xl font-semibold ${className}`}
      type={type ? type : 'button'}
    >
        {title}
    </button>
  )
}

export default Button