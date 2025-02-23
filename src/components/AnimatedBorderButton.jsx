function AnimatedBorder({text , icon}){
    return (
      
        <div className="card-wrapper h-10 w-24 ml-4 rounded-full">
          <div className="card-content flex items-center justify-center text-[14px] font-extralight">
           {icon ? (
              <div className="flex justify-center items-center ">
              <div className="mr-3">{icon}</div>
              <div className="font-medium text-gray-400">{text}</div> 
              </div>
              )
              : (<div >{text}</div>)}
          
          </div>
        </div>
      
      
    )
  }
  export default AnimatedBorder;