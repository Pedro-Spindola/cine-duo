import styles from './Container.module.css'
import { Outlet } from 'react-router-dom';

function Container(props){
    const containerClasses = `${styles.container} ${props.addClass || ''}`;
    return (
        <div className={containerClasses}>
            {props.children}
            <Outlet />
        </div>
    )
}
export default Container;