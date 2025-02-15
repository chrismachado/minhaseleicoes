import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

const Button = ({title, onPress, style} : ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;