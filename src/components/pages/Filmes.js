import styles from './Filmes.module.css'
import stylesSelect from '../pages/Filmes.module.css'
import Container from '../layout/Container'
import ListaFilmes from '../layout/ListaFilmes';
import Input from '../util/Input';
import { useState, useEffect } from 'react'
import SelectGenero from '../util/Select';
import Message from '../util/Message';

function Filmes(){
    
    const [meusFilmes, setMeusFilmes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/meusFilmes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        .then(resp => resp.json())
        .then(data => {
            setMeusFilmes(data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        .then(resp => resp.json())
        .then(data => {
            setCategories(data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    const [dadosFilme, setValoresFilme] = useState({
        id: null,
        nomeDoFilme: '',
        anoDeLancamento: '',
        oneGenero: '',
        twoGenero: '',
        historiaP1: '',
        atuacaoP1: '',
        roteiroP1: '',
        efeitosP1: '',
        trilhaP1: '',
        historiaP2: '',
        atuacaoP2: '',
        roteiroP2: '',
        efeitosP2: '',
        trilhaP2: '',
        media: ''
    });
    
    const handleInputChangeNome = (event) => {
        const { id, value } = event.target;
        setValoresFilme({ ...dadosFilme, [id]: value });
    };
    
    const handleChangeNumber = (event) => {
        const { id, value } = event.target;
    
        // Filtro para permitir apenas números
        const filteredValue = value.replace(/\D/g, '');
        
        // Limitação para no máximo 4 dígitos
        const limitedValue = filteredValue.slice(0, 4);
    
        setValoresFilme({ ...dadosFilme, [id]: limitedValue });

        console.log(dadosFilme)
    };
    
    const handleChangeNotas = (event) => {
        const { id, value } = event.target;
    
        // Filtra o valor para permitir apenas números
        const filteredValue = value.replace(/\D/g, ''); // Remove tudo que não for dígito
    
        // Valida se o valor está entre 1 e 10
        if (filteredValue !== '') {
            const numValue = parseInt(filteredValue, 10); // Converte para número inteiro
            if (numValue >= 1 && numValue <= 10) {
                setValoresFilme({ ...dadosFilme, [id]: numValue.toString() });
            }
        } else {
            setValoresFilme({ ...dadosFilme, [id]: '' });
        }
    };

    const handleInputChangeSelect = (event) => {
        const { id, value } = event.target;

        // Determine qual campo está sendo alterado com base no id
        if (id === 'oneGenero') {
            setValoresFilme({ ...dadosFilme, oneGenero: value });
        } else if (id === 'twoGenero') {
            setValoresFilme({ ...dadosFilme, twoGenero: value });
        }
    };

    // Função para manipular os dados do filme
    const handleEditarFilme = (dadosFilme) => {
        setValoresFilme({
            id: dadosFilme.id,
            nomeDoFilme: dadosFilme.nomeFilme,
            anoDeLancamento: dadosFilme.anoDeLancamento,
            oneGenero: dadosFilme.oneGenero,
            twoGenero: dadosFilme.twoGenero,
            historiaP1: dadosFilme.historiaP1,
            atuacaoP1: dadosFilme.atuacaoP1,
            roteiroP1: dadosFilme.roteiroP1,
            efeitosP1: dadosFilme.efeitosP1,
            trilhaP1: dadosFilme.trilhaP1,
            historiaP2: dadosFilme.historiaP2,
            atuacaoP2: dadosFilme.atuacaoP2,
            roteiroP2: dadosFilme.roteiroP2,
            efeitosP2: dadosFilme.efeitosP2,
            trilhaP2: dadosFilme.trilhaP2,
            media: dadosFilme.media
        });
        console.log(dadosFilme);
    };

    function createNewFilme(project){

        fetch('http://localhost:5000/meusFilmes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setMessage({ msg: 'Filme adicionado.', type: 'success', vis: 'on' });
            setMeusFilmes([...meusFilmes, data]);
        })
        .catch(err => {
            console.log(err)
        })
    }

    function updateFilme(project) {
        console.log(dadosFilme.id);
        fetch(`http://localhost:5000/meusFilmes/${dadosFilme.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setMessage({ msg: 'Filme editado.', type: 'success', vis: 'on' });
            setMeusFilmes(prevState => prevState.map(filme => filme.id === data.id ? data : filme));
        })
        .catch(err => {
            console.log(dadosFilme);
            console.log(err);
        });
    }

    function handleApagarFilme(id) {
        fetch(`http://localhost:5000/meusFilmes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(resp => resp.json())
        .then(data => {
            console.log('Filme apagado:', data);
            setMessage({ msg: 'Filme apagado.', type: 'success', vis: 'on' });
            setMeusFilmes(meusFilmes.filter(filme => filme.id !== id));
        })
        .catch(err => {
            console.log('Erro ao apagar filme:', err);
            // Pode exibir uma mensagem de erro aqui, se necessário
        });
    }

    const handleDeletFilme = (dadosFilme) => {
        handleApagarFilme(dadosFilme.id);
    };

    function limparInput() {

        setValoresFilme({
          id: null,
          nomeDoFilme: "",
          anoDeLancamento: "",
          oneGenero: "",
          twoGenero: "",
          historiaP1: "",
          atuacaoP1: "",
          roteiroP1: "",
          efeitosP1: "",
          trilhaP1: "",
          historiaP2: "",
          atuacaoP2: "",
          roteiroP2: "",
          efeitosP2: "",
          trilhaP2: "",
          media: ""
        });
    }

    function handleSubmit(){

        function calcularMedia(notas) {
            const soma = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
            return soma / notas.length;
        }

        // Validações
        function validarCampoVazio(...campos) {
            for (let campo of campos) {
                if (campo.trim() === '') {
                    //alert('Todos os campos devem ser preenchidos.');
                    setMessage({ msg: 'Todos os campos devem ser preenchidos.', type: 'error', vis: 'on' });
                    return false;
                }
            }
            return true;
        }

        // Executando validações
        if (!validarCampoVazio(dadosFilme.nomeDoFilme, dadosFilme.anoDeLancamento, dadosFilme.oneGenero, dadosFilme.historiaP1, dadosFilme.atuacaoP1, dadosFilme.roteiroP1, dadosFilme.efeitosP1, dadosFilme.trilhaP1, dadosFilme.historiaP2, dadosFilme.atuacaoP2, dadosFilme.roteiroP2, dadosFilme.efeitosP2, dadosFilme.trilhaP2)) {
            return;
        }

        const newFilme = {
            nomeDoFilme: dadosFilme.nomeDoFilme,
            anoDeLancamento: dadosFilme.anoDeLancamento,
            oneGenero: dadosFilme.oneGenero,
            twoGenero: dadosFilme.twoGenero,
            historiaP1: dadosFilme.historiaP1,
            atuacaoP1: dadosFilme.atuacaoP1,
            roteiroP1: dadosFilme.roteiroP1,
            efeitosP1: dadosFilme.efeitosP1,
            trilhaP1: dadosFilme.trilhaP1,
            historiaP2: dadosFilme.historiaP2,
            atuacaoP2: dadosFilme.atuacaoP2,
            roteiroP2: dadosFilme.roteiroP2,
            efeitosP2: dadosFilme.efeitosP2,
            trilhaP2: dadosFilme.trilhaP2,
            media: calcularMedia([dadosFilme.historiaP1, dadosFilme.atuacaoP1, dadosFilme.roteiroP1, dadosFilme.efeitosP1, dadosFilme.trilhaP1, dadosFilme.historiaP2, dadosFilme.atuacaoP2, dadosFilme.roteiroP2, dadosFilme.efeitosP2, dadosFilme.trilhaP2])
        };

        if (dadosFilme.id) {
            updateFilme(newFilme);
        } else {
            createNewFilme(newFilme);
        }

        limparInput();

    }

    const [message, setMessage] = useState({ msg: '', type: '', vis: '' });

    const clearMessage = () => {
        setMessage({ msg: '', type: '', vis: ''});
    };

    return (
        <main className={styles.main}>
            {message && <Message msg={message.msg} type={message.type} vis={message.vis} clearMessage={clearMessage}></Message>}
            <section className={styles.sectionList}>
                <Container addClass={styles.container}>
                    <div className={styles.boxLista}>
                        <ListaFilmes meusFilmes={meusFilmes} setDadosFilme={handleEditarFilme} setDadosDelet={handleDeletFilme}></ListaFilmes>
                    </div>
                </Container>
            </section>
            <section className={styles.section}>
                <Container addClass={styles.container}>
                    <div className={styles.boxDados}>
                        <div className={styles.inputDados}>
                            <h2>Dados do filmes:</h2>
                            <div className={styles.boxDados1}>
                                <Input textoLabel="Nome do Filme: " tipo="text" id="nomeDoFilme" placeholder="Nome" value={dadosFilme.nomeDoFilme} handleOnChange={handleInputChangeNome}/>
                                <Input textoLabel="Ano de Lançamento: " tipo="text" id="anoDeLancamento" placeholder="Ano de Lançamento" value={dadosFilme.anoDeLancamento} handleOnChange={handleChangeNumber}/>
                            </div>
                            <div className={styles.boxDados2}>
                                <SelectGenero styles={stylesSelect} textoLabel="Primeiro Gênero:" id="oneGenero" handleOnChange={handleInputChangeSelect} options={categories} disabled="disabled" valor={dadosFilme.oneGenero}/>
                                <SelectGenero styles={stylesSelect} textoLabel="Segundo Gênero:" id="twoGenero" handleOnChange={handleInputChangeSelect} options={categories} disabled="" valor={dadosFilme.twoGenero}/>
                            </div>
                        </div>
                        <div className={styles.topico}>
                            <h2>Nota para as categorias:</h2>
                            <div className={styles.dadosTopico1}>
                                <h2>Pessoa 1</h2>
                                <Input textoLabel="História: " tipo="text" id="historiaP1" placeholder="Nota..." value={dadosFilme.historiaP1} handleOnChange={handleChangeNotas}/>
                                <Input textoLabel="Atuação: " tipo="text" id="atuacaoP1" placeholder="Nota..." value={dadosFilme.atuacaoP1} handleOnChange={handleChangeNotas}/>
                                <Input textoLabel="Roteiro: " tipo="text" id="roteiroP1" placeholder="Nota..." value={dadosFilme.roteiroP1} handleOnChange={handleChangeNotas}/>
                                <Input textoLabel="Efeito: " tipo="text" id="efeitosP1" placeholder="Nota..." value={dadosFilme.efeitosP1} handleOnChange={handleChangeNotas}/>
                                <Input textoLabel="Trilha: " tipo="text" id="trilhaP1" placeholder="Nota..." value={dadosFilme.trilhaP1} handleOnChange={handleChangeNotas}/>
                            </div>
                            <div className={styles.dadosTopico2}>
                                <h2>Pessoa 2</h2>
                                <Input textoLabel="História: " tipo="text" id="historiaP2" placeholder="Nota..." value={dadosFilme.historiaP2} handleOnChange={handleChangeNotas}/>
                                <Input textoLabel="Atuação: " tipo="text" id="atuacaoP2" placeholder="Nota..." value={dadosFilme.atuacaoP2} handleOnChange={handleChangeNotas}/>
                                <Input textoLabel="Roteiro: " tipo="text" id="roteiroP2" placeholder="Nota..." value={dadosFilme.roteiroP2} handleOnChange={handleChangeNotas}/>
                                <Input textoLabel="Efeito: " tipo="text" id="efeitosP2" placeholder="Nota..." value={dadosFilme.efeitosP2} handleOnChange={handleChangeNotas}/>
                                <Input textoLabel="Trilha: " tipo="text" id="trilhaP2" placeholder="Nota..." value={dadosFilme.trilhaP2} handleOnChange={handleChangeNotas}/>
                            </div>
                        </div>
                        <div className={styles.lineOpcoes}>
                            <button className={styles.btnOpcoes} onClick={handleSubmit} >Adicionar</button>
                        </div>
                        
                    </div>
                </Container>
            </section>
        </main>
    )
}
export default Filmes;