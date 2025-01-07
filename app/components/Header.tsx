export default function HeaderComponet(){
   return( <div> <header className=" hidden md:flex p-5 bg-black/30 justify-around items-center text-green-200">
            <a target="_blank" href="https://www.freecodecamp.org/news/react-form-validation-zod-react-hook-form/"> <h1 className="text-lg hover:underline hover:text-yellow-200 duration-200">Documentation </h1></a>
            <a target="_blank" href="https://my-portfolio-blush-nu.vercel.app/"><h1 className="text-lg hover:underline hover:text-yellow-200 duration-200">About Me</h1></a>
       
    </header>
    <header className=" flex md:hidden flex-col gap-3 p-5 bg-black/30 justify-around items-center text-green-200">
            <a target="_blank" href="https://www.freecodecamp.org/news/react-form-validation-zod-react-hook-form/"> <h1 className="text-sm hover:underline hover:text-yellow-200 duration-200">Documentation </h1></a>
            <a target="_blank" href="https://my-portfolio-blush-nu.vercel.app/"><h1 className="text-sm hover:underline hover:text-yellow-200 duration-200">About Me</h1></a>
       
    </header>
    </div>)
}