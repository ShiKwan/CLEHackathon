import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardSection, Button, Header } from './common';

export default class result extends React.Component {
    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                            <Header title='verdict...' /> 
                    </CardSection>
                </Card>
            </View>
        )
    }
}

