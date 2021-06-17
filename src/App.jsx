
// git 

// Prazo: estregar até as 23h59min do dia 16/06/2021

// API: https://servicodados.ibge.gov.br/api/docs/localidades

// - Criar um select para selecionar um estado. 
// Utilizar a api: https://servicodados.ibge.gov.br/api/v1/localidades/etasdos;

// - Criar um select para selecionar um município. 
// Utilizar a api: https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios. Só deve mostrar os municípios do estado que foi selecionado, ou seja, o select de municípios é dependente do select de estados;

// - Ao selecionar um município mostrar as informações de microrregião, mesorregião, UF e região do município. 
// Utilizar a api: https://servicodados.ibge.gov.br/api/v1/localidades/municipios/{municipio}/distritos.
// Para mostrar essas informações na página, use sua criatividade.

// Obrigatório usar os três conceitos centrais do redux: store, reducers e actions

// Colocar o projeto no github e enviar o link para que seja avaliado.

import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import { fetchMunicipios } from './redux/reducers/municipios';
import { fetchInformacoes } from './redux/reducers/informacoesMunicipio';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const renderEstados = (estado) => (
    <MenuItem
        key={estado.id}
        value={estado.sigla}
    > {estado.nome}
    </MenuItem>
)

const renderMunicipios = (municipio) => (
    <MenuItem
        key={municipio.id}
        value={municipio.nome}
    > {municipio.nome}
    </MenuItem>
)

const renderInfoMunicipio = (info) => (
    <ListItem key={info.id}>
        <ListItemText
            // primary="Single-line item"
            secondary={info.nome}
        />
    </ListItem>
)




function App() {

    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const dispatch = useDispatch()

    const estados = useSelector(state => state.estados)
    const municipios = useSelector(state => state.municipios)
    const informacoes = useSelector(state => state.informacoesMunicipio)

    const handleEstadoChange = (event) => {
        const estadoSelecionado = event.target.value
        dispatch(fetchMunicipios(estadoSelecionado))
    };

    const handleMunicipioChange = (event) => {
        const municipioSelecionado = event.target.value
        dispatch(fetchInformacoes(municipioSelecionado))
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                <Select
                    defaultValue=""
                    onChange={handleEstadoChange}
                >
                    {estados.map(renderEstados)}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Município</InputLabel>
                <Select
                    defaultValue=""
                    onChange={handleMunicipioChange}
                >
                    {municipios.map(renderMunicipios)}
                </Select>
            </FormControl>
            {informacoes &&
                <List dense={dense}>
                    {informacoes.map(renderInfoMunicipio)}
                </List>
            }
        </div >
    )
}

export default App;