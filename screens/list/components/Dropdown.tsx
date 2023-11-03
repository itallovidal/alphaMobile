import React from 'react';
import {FunnelSimple} from "phosphor-react-native";
import {HStack, Text} from "native-base";
import SelectDropdown from "react-native-select-dropdown";

const filterOption = [
    'Sem filtro',
    'Região X',
    // 'Região Y',
    // 'Região Z',
    // 'Ascendente',
    // 'Descendente'
]

function Dropdown() {
    return (
        <HStack bg={{
                    linearGradient: {
                        colors: ['black', 'blueGray.600'],
                        start: [0.7, 0],
                    }
                }}
                pt={10}
                alignItems={"center"}
                p={5}
                mb={5}
                w={"full"}>
            <Text fontSize={24}
                  fontWeight={"bold"}
                  color={"white"} flex={1}>Listagem</Text>

            <SelectDropdown data={filterOption}
                            buttonStyle={{backgroundColor: 'transparent'}}
                            buttonTextStyle={{color: 'white'}}
                            dropdownStyle={{backgroundColor:'white', borderRadius: 6}}
                            onSelect={(selected)=> console.log(selected)}
                            defaultButtonText={'Sem filtro.'}
                            renderDropdownIcon={()=> <FunnelSimple size={32}
                                                                     color={'white'}/>}/>
        </HStack>
    );
}

export default Dropdown;
