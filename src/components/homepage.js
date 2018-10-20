import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardSection, Button, Header } from './common';
import { CheckBox } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
export default class home extends React.Component {
    state = {
        diagnosed: false,

    }
    onButtonPress() {
        Actions.first();
    }
    render() {
        const { diagnosed } = this.state;
        return (
            <View>
                <Card>
                    <CardSection >
                        <CheckBox
                            title="Have you been diagnosed with Parkinson's disease?"
                            checked={diagnosed}
                            onPress={() => this.setState({ diagnosed: !diagnosed })}
                        />
                    </CardSection>
                    
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            If yes, Go to next page
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}
