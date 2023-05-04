import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
const defaultConfig = {
  timeout: 5000,
  baseUrl: ''
}

class Http {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsRespones()
  }

  private static axiosInstance = axios.create(defaultConfig)

  // 请求拦截
  private httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      return config
    }, err => {
      return Promise.reject(err)
    })

  }

  //响应拦截
  private httpInterceptorsRespones() {
    Http.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      return response
    }, err => {
      return Promise.reject(err)
    })
  }

  /* 封装请求 */
  // get
  public async httpGet<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    const res = await Http.axiosInstance.get(url, params)
    return res.data
  }

  // post
  public async httpPost<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    const res = await Http.axiosInstance.post(url, params)
    return res.data
  }
}

export const http = new Http()