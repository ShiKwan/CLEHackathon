import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardSection, Button, Header } from './common';
import { CheckBox } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
export default class first extends React.Component {
    state = {
        diagnosed : false,
        duration : false,
        dyskinesia : false,
        tremor : false,
    }
    onButtonPress() {
        Actions.second();
    }
    render() {
        const {diagnosed, duration, dyskinesia, tremor } = this.state;
        return (
            <View>
                <Card>
                    
                    <CardSection>
                        <CheckBox
                            title="If so, was your diagnosis more than 4 years ago?"
                            checked={duration}
                            onPress={() => this.setState({ duration: !duration })}
                        />
                    </CardSection>
                    <CardSection>
                        <CheckBox
                            title="Do you take medications from the doctor for Parkinson's disease?"
                            checked={dyskinesia}
                            onPress={() => this.setState({ dyskinesia: !dyskinesia })}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Go to next page
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}
