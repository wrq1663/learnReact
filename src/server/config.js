const proBaseUrl='http://httpbin.org'
const devBaseUrl='http://httpbin.org'
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl : proBaseUrl;