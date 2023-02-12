import useStand from "../hooks/useStand"
import Layout from "../layout/Layout"

export default function Home({children}) {
  const { currentCategory } = useStand()
  

  return (
    <Layout page={`${currentCategory?.name}`}>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
    </Layout>
  )
}

