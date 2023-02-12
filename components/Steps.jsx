import { useRouter } from "next/router";

const steps = [
    {step: 1, name: "Menu", url: "/"},
    {step: 2, name: "Resume", url: "/resume"},
    {step: 3, name: "Total", url: "/total"}
];

export default function Steps() {
    const router = useRouter()

    
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
    </>
  )
}
