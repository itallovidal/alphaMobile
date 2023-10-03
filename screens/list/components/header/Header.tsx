import React from 'react';
import * as Styles from './header.styled'
import {useTheme} from "styled-components/native";
import {FunnelSimple} from "phosphor-react-native";

const filterOption = [
    'Sem filtro',
    'Região X',
    'Região Y',
    'Região Z',
    'Ascendente',
    'Descendente'
]

function Header() {
    const theme = useTheme()
    return (
        <Styles.HeaderWrapper start={{ x: -0.7, y: 0 }}
            colors={[...theme.COLORS.GRADIENT]} >
            <Styles.Title>Lista</Styles.Title>
            
            <Styles.FilterWrapper data={filterOption}
                                  buttonStyle={{backgroundColor: 'transparent'}}
                                  buttonTextStyle={{color: 'white'}}
                                  dropdownStyle={{backgroundColor:'white', borderRadius: 6}}
                                  onSelect={(selected)=> console.log(selected)}
                                  defaultButtonText={'Sem Filtro.'}
                                  renderDropdownIcon={()=> <FunnelSimple size={32} color={'white'}/>}
            />
                {/*<Styles.SelectedFilter>Sem filtros</Styles.SelectedFilter>*/}
                {/*<FunnelSimple size={32} color={'white'}/>*/}
        </Styles.HeaderWrapper>
    );
}

export default Header;