import styles from './Settings.module.css'
import Container from '../layout/Container';
import Input from '../util/Input'
import {useState, useEffect} from 'react'
import Message from '../util/Message';

function Settings(){

    const [message, setMessage] = useState({ msg: '', type: '', vis: '' });

    const handleChangeNomes = (event) => {
        const { id, value } = event.target;
        setNomePessoas((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const [user, setUser] = useState([])

    const [nomePessoas, setNomePessoas] = useState({pessoaOne: "", pessoaTwo: ""});
    
    function updateNomes(project) {
        fetch(`http://localhost:5000/user/${project.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Erro ao editar nomes');
            }
            return resp.json();
        })
        .then(data => {
            console.log(data);
            setMessage({ msg: 'Nomes editados com sucesso.', type: 'success', vis: 'on' });
            setUser({ pessoa01: data.pessoa01, pessoa02: data.pessoa02 });
        })
        .catch(err => {
            console.error('Erro ao realizar a requisição:', err);
            setMessage({ msg: 'Erro ao editar nomes.', type: 'error', vis: 'on' });
        });
    }

    function buttonMyNomes(){
        const user = {
            id: "1",
            pessoaOne: nomePessoas.pessoaOne || "",
            pessoaTwo: nomePessoas.pessoaTwo || ""
        }
        console.log(user)
        updateNomes(user);
    }

    return (
        <main className={styles.main}>
            <Container addClass={styles.container}>
                <div className={styles.boxSobre}>
                    <h2 className={styles.titulo}>MEU TITULO</h2>
                    <h4>Sub Titulo</h4>
                    <div className={styles.boxInput}>
                        <Input styleInput={styles.input} value={nomePessoas.pessoaOne} styleLabel={styles.label} textoLabel="Nome da primeira pessoa!"  tipo="Text" id="pessoaOne" placeholder="Nome..." handleOnChange={handleChangeNomes}></Input>
                        <Input styleInput={styles.input} value={nomePessoas.pessoaTwo} styleLabel={styles.label} textoLabel="Nome da segunda pessoa!"  tipo="Text" id="pessoaTwo" placeholder="Nome..." handleOnChange={handleChangeNomes}></Input>
                    </div>
                    <button onClick={buttonMyNomes}>Salvar</button>
                    <div className={styles.texto}>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut justo sed nisl porta vehicula. Donec et purus feugiat, 
                            sollicitudin justo cursus, fringilla urna. Aenean nisl ex, molestie ac enim a, congue maximus tortor. Nulla facilisis nisl 
                            sit amet aliquet cursus. Fusce posuere sed urna quis porta. Proin ut arcu posuere, fringilla leo eu, convallis ante. 
                            Vestibulum non tempor dui. Sed lectus sapien, posuere nec est ut, ornare sagittis turpis. Vestibulum dictum vitae diam 
                            consequat porta. Ut in fermentum ante, et imperdiet turpis. Mauris porta tortor vitae sem facilisis, et cursus elit iaculis. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec dui mi. Sed nibh libero, 
                            ullamcorper at aliquam sed, vulputate a erat. Fusce ut ante in nunc accumsan tincidunt. Cras elementum commodo vehicula.</h3>
                    </div>
                </div>
            </Container>
        </main>
    )
}
export default Settings;