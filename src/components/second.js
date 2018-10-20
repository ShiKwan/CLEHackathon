import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardSection, Button, Header } from './common';
import { CheckBox } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';


export default class second extends React.Component {
    state= {
        slowness : false,
        stiffness : false,
        tremor: false,
        freezing: false,
    }
    onButtonPress() {
        Actions.result();
    }
    render() {
        const { slowness, stiffness, tremor, freezing } = this.state;
        return (
            
            <View>
                <Card>
                    <CardSection>
                        <Header title='10/21/2018 at 12:30pm ' />
                    </CardSection>
                    <CardSection>
                        <Text>On a typical day when you have taken your medications as prescribed, do you have any of the following problems associated with your Parkinson's disease?</Text>
                    </CardSection>
                    
                    <CardSection>
                        <CheckBox
                            title='Periods when you are slower than normal?'
                            checked={slowness}
                            onPress={() => this.setState({ slowness: !slowness })}
                        />
                    </CardSection>
                    <CardSection>
                        <CheckBox
                            title='Periods when you are stiff or stiffer than normal?'
                            checked={stiffness}
                            onPress={() => this.setState({ stiffness: !stiffness })}
                        />
                    </CardSection>
                    <CardSection>
                        <CheckBox
                            title='Times when you have tremor or when your tremor gets worse?'
                            checked={tremor}
                            onPress={() => this.setState({ tremor: !tremor })}
                        />
                    </CardSection>
                    <CardSection>
                        <CheckBox
                            title="Times when you 'freeze' still or are off balance?"
                            checked={freezing}
                            onPress={() => this.setState({ freezing: !freezing })}
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

