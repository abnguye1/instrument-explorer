import { Outlet } from 'react-router'
import useInstrumentData from './useInstrumentData.js'
import LoadingPanel from '../components/feedback/LoadingPanel.jsx'
import ErrorPanel from '../components/feedback/ErrorPanel.jsx'

/**
 * Parent route for all three explorer steps. Loads the data once and hands
 * the families to whichever step is showing through the Outlet context.
 */
export default function ExplorerLayout() {
  const { families, isLoading, error, retry } = useInstrumentData()

  if (isLoading) {
    return <LoadingPanel message="Loading the instrument collection from the database..." />
  }

  if (error) {
    return (
      <ErrorPanel
        title="Unable to Load Data"
        message={`Could not load the instrument database. ${error}`}
        onRetry={retry}
      />
    )
  }

  return <Outlet context={families} />
}
