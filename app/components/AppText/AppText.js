import React from 'react';
import { Text,StyleSheet, Platform } from 'react-native';
import style from './style';
function AppText({children}) {
    return (
        <Text style={style.text}>{children}</Text>
    );
}

export default AppText;