import { store } from './app/store'
import { Provider } from 'react-redux'
import { Counter } from './features/counter/Counter'

function App() {

  return (
    <>
      <h4>Redux Toolkit Play</h4>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  )
}

export default App
