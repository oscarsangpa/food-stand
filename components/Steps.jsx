import { useRouter } from "next/router";


const steps = [
    {step: 1, name: "Menu", url: "/"},
    {step: 2, name: "Resume", url: "/resume"},
    {step: 3, name: "Total", url: "/total"}
];

export default function Steps() {
    const router = useRouter()

    //calculate status bar progress
    const calculateProgress = () => {
        let value;
        if(router.pathname === "/") {
            value = 1
        } else if(router.pathname === "/resume") {
            value = 50
        } else {
            value = 100
        }
        return value
    }
    
  return (
    <>
    <div className="flex justify-between mb-5">
    {steps.map(step => (
        <button
            className="text-2xl font-bold"
            onClick={()=> {
                router.push(step.url)
            }} 
            key={step.step}>
            {step.name}
        </button>
        ))}
    </div>

    <div className="bg-gray-100 mb-10">
        <div 
            className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
            style={{width: `${calculateProgress()}%`}}
        ></div>
    </div>
    </>
  )
}
