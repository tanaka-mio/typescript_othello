import { MockMethods } from 'axios-mock-server'

const methods: MockMethods = {
  get() {
    return [200, 'tanakaのところにきました']
  }
}

export interface Methods {
  get: {
    response: String
  }
}

export default methods
