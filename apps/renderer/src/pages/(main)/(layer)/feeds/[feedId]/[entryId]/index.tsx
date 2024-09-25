import { AnimatePresence } from "framer-motion"
import { useParams } from "react-router-dom"

import { ROUTE_ENTRY_PENDING, views } from "~/constants"
import { useRouteView } from "~/hooks/biz/useRouteParams"
import { EntryContent } from "~/modules/entry-content"
import { AppLayoutGridContainerProvider } from "~/providers/app-grid-layout-container-provider"

export const Component = () => {
  const { entryId } = useParams()
  const view = useRouteView()
  const inWideMode = view ? views[view].wideMode : false
  return (
    <AnimatePresence>
      <AppLayoutGridContainerProvider>
        {!inWideMode && (
          <div className="flex min-w-0 flex-1 flex-col">
            <EntryContent entryId={entryId === ROUTE_ENTRY_PENDING ? "" : entryId} />
          </div>
        )}
      </AppLayoutGridContainerProvider>
    </AnimatePresence>
  )
}