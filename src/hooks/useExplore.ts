import { useCallback, useContext, useState } from "react";
import { ExploreContext } from "../context/exploreContext";
import { getAllPosts } from "../services/getAllPosts";
import { LIMIT } from "../utils/constants";

export function useExplore() {
  const {setPosts, currentOffset, setCurrentOffset} = useContext(ExploreContext)
  const [state, setState] = useState({loading: false})

  const loadMore = useCallback(() => {
    setState({loading: true})
    setCurrentOffset!(prev => prev + LIMIT)

    getAllPosts(currentOffset!).then(data => {
      setPosts!(prev => prev.concat(data))
      setState({loading: false})
    }).catch(err => {
      setState({loading: false})
      console.error(err)
    })
  }, [currentOffset,setCurrentOffset,setPosts])

  return {loadMore, isExploreLoading: state.loading}
}