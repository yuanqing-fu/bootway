export default function({ store, redirect, route }) {
  const userIsLoggedIn = !!store.state.user
  const urlRequiresAuth = /^\/tasks(\/|$)/.test(route.fullPath)
  const urlRequiresNonAuth =
    /^\/login(\/|$)/.test(route.fullPath) ||
    /^\/register(\/|$)/.test(route.fullPath) ||
    /^\/password(\/|$)/.test(route.fullPath)
  if (!userIsLoggedIn && urlRequiresAuth) {
    return redirect('/login')
  }
  if (userIsLoggedIn && urlRequiresNonAuth) {
    return redirect('/tasks')
  }
  return Promise.resolve()
}
