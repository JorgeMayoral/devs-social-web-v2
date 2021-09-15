import { useCallback, useContext, useState } from "react";
import { TimelineContext } from "../context/timelineContext";
import { UserContext } from "../context/userContext";
import { getTimeline } from "../services/getTimeline";
import { LIMIT } from "../utils/constants";

export function useTimeline() {
  const {setTimeline, setCurrentOffset, currentOffset} = useContext(TimelineContext)
  const {token} = useContext(UserContext) 
  const [state, setState] = useState({loading: false, isAllLoaded: false})

  const loadMore = useCallback(() => {
    setState({loading: true, isAllLoaded: false})
    setCurrentOffset!(prev => prev + LIMIT)

    getTimeline(token!, currentOffset!).then(data => {
      if (data.length < 10) {
        setTimeline!(prev => prev.concat(data))
        setState({loading: false, isAllLoaded: true})
      }
      setTimeline!(prev => prev.concat(data))
      setState({loading: false, isAllLoaded: false})
    }).catch(err => {
      setState({loading: false, isAllLoaded: false})
      console.error(err)
    })
  }, [currentOffset,setCurrentOffset,setTimeline, token])

  return {loadMore, isTimelineLoading: state.loading, isAllLoaded: state.isAllLoaded}
}