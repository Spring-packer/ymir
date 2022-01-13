import { io } from 'socket.io-client'

let socket = null
export function getSocket(id) {
  let socket = null
  const url = '/' + id

  if (!socket) {
    socket = io(url, {
      path: '/socket/ws/socket.io'
    })
    socket.off()
  }
  return socket
}

