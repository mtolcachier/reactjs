import { useState } from "react";

const useCount = () => {

    const [count,setCount] = useState(1)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        count > 1 ? setCount(count - 1) : setCount(count)
    }

    return {
        count,
        increase,
        decrease
    }
}

export default useCount