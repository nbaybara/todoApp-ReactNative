import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';

import Note from './Note';
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
    }
    render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteNote(key)} />
        });

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>- NOTES-</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput style={styles.TextInput}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder='>write notes here'
                        placeholderTextColor='white'
                        underlineColorAndroid=''>
                    </TextInput>
                </View>
                <TouchableOpacity
                    onPress={this.addNote.bind(this)}
                    style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
    addNote() {
        if (this.state.noteText) {
            var d = new Date();
            this.state.noteArray.push({
                'date': d.getFullYear() +
                    "/" + (d.getMonth() + 1) +
                    "/" + d.getDate(),
                'note': this.state.noteText
            });
            this.setState({ noteArray: this.state.noteArray })
            this.setState({ noteText: '' });
        }
    }
    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#FA8072',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#E9967A'
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        padding: 26,

    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,

    },
    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 10,
        backgroundColor: '#FA8072',


    },
    TextInput: {
        padding: 15,
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
        backgroundColor: '#FA8072',
        alignSelf: 'stretch',
        borderTopColor: '#ddd',

    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 10,
        backgroundColor: '#E9967A',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 30,

    }


});