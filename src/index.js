import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'

const user =storageUtils.getUser()
memoryUtils.user=user
ReactDOM.render(<App></App>,document.getElementById('root'))