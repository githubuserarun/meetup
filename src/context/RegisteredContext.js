import React from 'react'

const RegisteredContext = React.createContext({
  isRegistered: false,
  showError: false,
  name: '',
  topic: '',
  changeName: () => {},
  changeTopic: () => {},
  addError: () => {},
})
export default RegisteredContext
