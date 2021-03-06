import axios from 'axios'

const baseUrl = process.env.API_BASE || ''

const parseUrl = (url, params) => {
  const str = Object.keys(params).reduce((result, key) => {
    result += `${key}=${params[key]}&` //  eslint-disable-line
    return result
  }, '')
  return `${baseUrl}/${url}?${str.substr(0, str.length - 1)}`
}

// export const get = (url, params) => {
//   return new Promise((resolve, reject) => {
//     axios.get(parseUrl(url, params))
//       .then(resp => {
//         const data = resp.data
//         if (data && data.success === true) {
//           resolve(data)
//         } else {
//           resject(data)
//         }
//       }).catch((err) => {
//         if (err.respose) {
//           reject(err.response.date)
//         } else {
//           reject({
//             success: false,
//             err_mag: err.message,
//           })
//         }
//       })
//   })
// }
export const get = (url, params) => new Promise((resolve, reject) => {
  axios.get(parseUrl(url, params))
    .then((resp) => {
      const {
        data,
      } = resp.data
      if (data && data.success === true) {
        resolve(data)
      } else {
        reject(data)
      }
    }).catch(reject)
})

export const post = (url, params, datas) => new Promise((resolve, reject) => {
  axios.get(parseUrl(url, params), datas)
    .then((resp) => {
      const {
        data,
      } = resp
      if (data && data.success === true) {
        resolve(data)
      } else {
        reject(data)
      }
    }).catch(reject)
})
