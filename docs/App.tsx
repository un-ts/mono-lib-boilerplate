import { lazy, Suspense, useMemo } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useParams,
  Navigate,
} from 'react-router-dom'

import './global.css'
import 'github-markdown-css'

export type Params = { name: string } | { orgName: string; pkgName: string }

const Readme = () => {
  const params = useParams<Params>() as Readonly<Params>
  const Readme = useMemo(
    () =>
      // eslint-disable-next-line @eslint-react/no-nested-lazy-component-declarations
      lazy(() =>
        'name' in params
          ? import(`../packages/${params.name}/README.md`)
          : // eslint-disable-next-line sonarjs/no-nested-conditional
            'orgName' in params
            ? import(
                `../packages/${params.orgName}/${params.pkgName}/README.md`
              )
            : import('../README.md'),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Object.values(params)],
  )
  return (
    <Suspense>
      <Readme />
    </Suspense>
  )
}

const Changelog = () => {
  const params = useParams<Params>() as Readonly<Params>
  const Changelog = useMemo(
    () =>
      // eslint-disable-next-line @eslint-react/no-nested-lazy-component-declarations
      lazy(() =>
        'name' in params
          ? import(`../packages/${params.name}/CHANGELOG.md`)
          : // eslint-disable-next-line sonarjs/no-nested-conditional
            'orgName' in params
            ? import(
                `../packages/${params.orgName}/${params.pkgName}/CHANGELOG.md`
              )
            : import('../CHANGELOG.md'),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Object.values(params)],
  )
  return (
    <Suspense>
      <Changelog />
    </Suspense>
  )
}

export const App = () => (
  <Router>
    <Routes>
      <Route
        path="/packages/:name"
        element={<Readme />}
      />
      <Route
        path="/packages/:orgName/:pkgName"
        element={<Readme />}
      />
      <Route
        path="/CHANGELOG.md"
        element={<Changelog />}
      />
      <Route
        path="/packages/:orgName/:pkgName/CHANGELOG.md"
        element={<Changelog />}
      />
      <Route
        path="/packages/:name/CHANGELOG.md"
        element={<Changelog />}
      />
      <Route
        path="/"
        element={<Readme />}
      />
      <Route
        path="*"
        element={<Navigate to="/" />}
      ></Route>
    </Routes>
  </Router>
)
