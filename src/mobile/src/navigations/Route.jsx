import { useUser } from '../context/UserContex';
import Main from '../navigations/Main';
import Auth from '../navigations/Auth';

const Route = () => {
    const { signed } = useUser();

    return (
        <>
            {
                signed
                ? <Main />
                : <Auth />
            }
        </>
    )
}

export default Route;