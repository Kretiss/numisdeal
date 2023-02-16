export {}

// // import jwt_decode from 'jwt-decode'
// import { toast } from 'react-toastify'
// import { useEffect, useRef } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Store from './localstorage'
// // import useStoreState from '../hooks';
// // import {useMemo} from 'react';
// // import { UserInfo } from './userInfo'
// // import { UserJwtPayload } from '../@types/user'
// // import {useEffect} from 'react';
// // import { keepAlive } from '../api/authApi'
// import { queryClient } from '../api'
//
// export const UserStoreKey = '-somiq-user-token'
// export const UserInfoStoreKey = '-somiq-user-info'
//
// // const getUser = (token?: string, info?: string): UserInfo | undefined =>
// //   token && info
// //     ? {
// //       ...jwt_decode<UserJwtPayload>(token),
// // ...JSON.parse(info)
// // }
// // : undefined
//
// export const setUser = (responseToken: string) => {
//   Store.set(UserStoreKey, responseToken)
//   // Store.set(UserInfoStoreKey, jwt_decode<UserJwtPayload>(responseToken).user)
//   // const [token, setToken] = useStoreState<string>(UserStoreKey);
//   // const [info, setInfo] = useStoreState<string>(UserInfoStoreKey);
//   // setToken(responseToken)
//   // setInfo(JSON.stringify(jwt_decode<UserJwtPayload>(responseToken).user))
// }
//
// const useLoggedInUser = (required = true) => {
//   const token = Store.get(UserStoreKey) as string | undefined
//   const user = Store.get(UserInfoStoreKey) as UserInfo | undefined
//   // const [token] = useStoreState<string>(UserStoreKey);
//   // const [info] = useStoreState<string>(UserInfoStoreKey);
//   // return useMemo(() => getUser(token, info), [token, info]);
//   // return info
//
//   if (
//     required &&
//     (!token ||
//       jwt_decode<UserJwtPayload>(token as string).exp <= +new Date() / 1000)
//   ) {
//     useLogout()
//     toast.warn('session_expired')
//     return undefined
//   }
//
//   // useEffect(() => {
//   //   console.log('controllig user')
//   //   if (!token || (jwt_decode<UserJwtPayload>(token as string).exp) <= (+ new Date())) return;
//   //   console.log('user expired')
//   //   Store.set(UserStoreKey, undefined)
//   //   Store.set(UserInfoStoreKey, undefined)
//   //   toast('session_expired');
//   // }, []);
//
//   if (!user) return undefined
//
//   user.isAdmin = () => {
//     return user.role === 'ADMIN'
//   }
//   user.isProjectManager = () => {
//     return user.role === 'PROJECT_MANAGER'
//   }
//   user.isBackOffice = () => {
//     return user.role === 'BACK_OFFICE'
//   }
//   user.isEmployee = () => {
//     return user.role === 'EMPLOYEE'
//   }
//
//   user.fullName = `${user.firstName} ${user.lastName}`
//
//   return user
// }
//
// export const useLogout = () => {
//   Store.set(UserStoreKey, undefined)
//   Store.set(UserInfoStoreKey, undefined)
// }
//
// export const useKeepAlive = () => {
//   const navigate = useNavigate()
//   const mounted = useRef<boolean | null>(null)
//
//   useEffect(() => {
//     mounted.current = true
//     const id = setInterval(
//       () =>
//         mounted.current &&
//         keepAlive()
//           .then((data) => {
//             setUser(data.token)
//           })
//           .catch(() => {
//             Store.set(UserStoreKey, undefined)
//             Store.set(UserInfoStoreKey, undefined)
//             clearInterval(id)
//             queryClient.removeQueries([])
//             navigate('/')
//           }),
//       // Repeat every 10 minutes
//       1000 * 60 * 10
//     )
//     return () => {
//       clearInterval(id)
//       mounted.current = null
//     }
//   }, [navigate])
// }
//
// export const isLoggedIn = () => !!Store.get(UserStoreKey)
//
// export default useLoggedInUser
