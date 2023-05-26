import {useRouter} from "next/router";
import st from '../../styles/user.module.scss';
import MainContainer from "../../components/MainContainer";

export default function User({user}) {

    const {query} = useRouter()

    return (
        <MainContainer keywords={user.name}>
            <div className={st.user}>
                <h1>
                    User {query.id}
                </h1>
                <div>Name: {user.name}</div>
            </div>
        </MainContainer>
    )
}

export const getServerSideProps = async ({params}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: {user}
    };
};