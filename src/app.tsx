
import { Provider } from 'react-redux'
import 'ossaui/dist/style/index.scss'
import store from './store'
import './app.scss'

export default (props) => {

  return <Provider store={store}>{props.children}</Provider>
}
