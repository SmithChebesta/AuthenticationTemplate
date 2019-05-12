// export default function (context) {
//   if (process.server) {

//   } else if (process.client) {

//   }
// }
export default function (context) {
  const token = context.app.$cookies.get('token')
  if (token) {
    context.store.dispatch('setToken', token)
  }


}
