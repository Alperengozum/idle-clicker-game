import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/test-user',
})

export const getUser = (username) => api.get("/user/" + username)
export const createUser = (username,password) => api.post("/create", {username:username,password:password})

const apis = {
  getUser,
  createUser,
}


export default apis


