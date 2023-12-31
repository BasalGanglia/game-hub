import {HStack, Switch, Text, useColorMode} from '@chakra-ui/react';

const ColorModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (<HStack justifyContent='space-between'>
        <Switch colorScheme='green' isChecked={
                colorMode === 'dark'
            }
            onChange={toggleColorMode}/>
            <Text>Dark mode</Text>
    </HStack>);
}

export default ColorModeSwitch;
