import { useEffect } from "react"

const useTitle = (title)=>{
     useEffect(()=>{
          document.title = `${title}-The-dragon-news`
     },[title])
}



export default useTitle;