import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() => {
        document.title = `${title} - Chinese Cooking Master`;
    },[title])
}

export default useTitle;