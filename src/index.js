import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { App } from './component/App'

const index=()=>{
    const main = document.querySelector('main');
    main.appendChild(App())
}
index();
