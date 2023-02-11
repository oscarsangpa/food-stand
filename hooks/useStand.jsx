import { useContext } from "react";
import StandContext from "../context/StandProvider";

const useStand = () => {
    return useContext(StandContext)
}

export default useStand