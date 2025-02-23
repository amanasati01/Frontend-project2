
function Button({text,className}) {
  return (
    <div className={`h-10 w-10 text-white text-lg ${className || ''}`}>
      {text}
    </div>
  )
}

export default Button
