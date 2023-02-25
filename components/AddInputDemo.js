import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    FlatList
} from 'react-native'
import InputDemo from './InputDemo';

const INCREMENT = 1;

class AddInputDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter: 0,
            numOfInput: [0]
        }
        this.addInput = this.addInput.bind(this)
    }

    addInput(){
        this.setState((state) => ({
            counter: state.counter + INCREMENT,
            numOfInput: [...state.numOfInput, state.counter]
        }))

        console.log(this.state.counter);
        console.log(this.state.numOfInput);



    }
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <FlatList
                    extraData={this.state.numOfInput}
                    keyExtractor={(item, index) => item.id}
                    renderItem={itemData => {
                        <InputDemo
                            id={itemData.item.id}
                        />
                    }}
                />
                <Button title='Add a location' onPress={this.addInput} />

            </View>
        );
    }

}

export default AddInputDemo;