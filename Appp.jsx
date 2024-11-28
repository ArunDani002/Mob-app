// App.js
import React, { useState } from 'react';
// import type { Node } from 'react';
import {
    View, TextInput, StyleSheet, Text, Alert, Pressable,
    TouchableOpacity, SafeAreaView, ScrollView, FlatList
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TableData from './Components/TableData';
import { Modal } from 'react-native';
import Prod from './Prod'


const Appp = () => {

    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [selected, setSelected] = useState(false);
    const [itemValue, setItemValue] = useState('')
    const [defItem, setDefItem] = useState(itemValue);
    const [quantity, setQuantity] = useState(0)
    const [rate , setRate] = useState(0)
    const [mainItem, setMainItem] = useState('')





    const generatePDF = async () => {
        if (!text) {
            Alert.alert('Error', 'Please select items!');
            return;
        }

        try {
            const options = {
                html: `
          <h1 style="text-align:center">Raj Tech Services</h1>
          <p style="text-align:left">${text}</p>
          <p style="text-align:right">${date}</p>
          
        `,
                fileName: 'myPDF',
                directory: 'Documents',
            };

            const file = await RNHTMLtoPDF.convert(options);
            Alert.alert('PDF Generated', `File saved to: ${file.filePath}`);
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to generate PDF');
        }
    };
    const title = "Generate Bill";


    const selectItem = (item) => {
        // console.log(item)
        // { selected ? false : setSelected(true) }
        setItemValue(item)
        
    }
    
    const offSelect = () => {
        setSelected(false)
    }

    const valueSetter = (value) =>{
        setDefItem(value)
        setMainItem(value)
    }
   


    return (
        <>
            <View style={styles.container}>
                <View>
                    <View style={styles.cont}>
                        <Text style={styles.ShopName}>QUOTE TECH SERVICES</Text>
                    </View>
                    <View style={{
                        border: '1ps solid red',
                        height: '300'
                    }}>
                        <ScrollView>
                            <TableData Item={defItem} quantity={quantity} rate={rate}/>
                        </ScrollView>
                    </View>
                </View>
                <View
                    style={{
                        border: '1px solid black',
                        backgroundColor: 'gray',
                        height: '1'
                    }}
                />
                <View
                    style={{
                        marginTop: '10',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >

                    <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Text style={{
                            fontSize: 18,
                            color: 'black',
                            textAlign: 'left'
                        }}>
                            Total Amount:
                        </Text>
                        <View style={[styles.amount,{
                            marginLeft:'30%',
                            border:'1px solid black',
                            display:'flex', 
                            flexDirection:'row', 
                            alignItems:'center',
                            justifyContent:"flex-end"}]}>
                        <Text style={{textAlign:'right',fontSize:20}}>
                            1000
                        </Text>
                        </View>
                    </View>

                </View>
                <View
                    style={{
                        marginTop: 10,
                        border: '1px solid black',
                        backgroundColor: 'gray',
                        height: '1'
                    }}
                />
                <View>
                    <View style={{ marginTop: 10 }}>
                        <>
                            {/* <Text style={{ fontSize: 20 }}> */}
                            <TextInput
                                style={{
                                    marginTop: 15,
                                    fontSize: 20,
                                    color: 'White',
                                    backgroundColor: "#d0c6c6",
                                    placeholderTextColor: 'white',
                                    paddingLeft: 10,
                                    width: '100%',
                                    borderRadius: 10,
                                }}
                                onChangeText={newValue => valueSetter(newValue)}
                                defaultValue={itemValue}
                                placeholder="Enter Item"
                                placeholderTextColor="#000"
                            />
                            
                            {/* {console.log(itemValue)}
                            {console.log(defItem)} */}
                            {defItem? setDefItem("")&&console.log('from 1 ',defItem): console.log("from 2 ",itemValue)}
                          


                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}>

                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}>
                                    <TextInput
                                        style={{
                                            marginTop: 15,
                                            fontSize: 20,
                                            borderColor: 'green',
                                            color: 'black',
                                            backgroundColor: "#d0c6c6",
                                            borderRadius: 20,
                                            placeholderTextColor: 'white',
                                            paddingLeft: 10,
                                            width: 100,
                                        }}
                                        type="number"
                                        placeholder="Enter No's"
                                        placeholderTextColor="#000"
                                        onChangeText={newText => setQuantity(newText)}
                                        defaultValue={quantity}
                                        
                                    />
                                    {console.log(quantity)}
                                    <TextInput
                                        style={{
                                            marginLeft: 10,
                                            marginTop: 15,
                                            fontSize: 20,
                                            borderColor: 'green',
                                            color: 'black',
                                            backgroundColor: "#d0c6c6",
                                            borderRadius: 20,
                                            placeholderTextColor: 'white',
                                            paddingLeft: 10,
                                            width: 100,
                                        }}
                                        placeholder="Enter Rate"
                                        placeholderTextColor="#000"
                                        onChangeText={newText => setRate(newText)}
                                        defaultValue={rate}
                                    />
                                     {console.log(rate)}
                                    <Pressable style={styles.button1} onPress={() => AddItem({ itemValue })}>
                                        <Text style={styles.text}>Add Item</Text>
                                    </Pressable>

                                </View>

                            </View></>
                    </View>
                    <View style={styles.frame}>
                        <ScrollView style={styles.frameScroll} >
                            <FlatList

                                data={[
                                    { key: '4ch XVR' },
                                    { key: '4ch NVR' },
                                    { key: '8ch XVR' },
                                    { key: '8ch NVR' },
                                    { key: '16ch XVR' },
                                    { key: '16ch NVR' },
                                    { key: '2mp ip camera bullet' },
                                    { key: '2mp ip camera dome' },
                                    { key: '8+2 Poe switch' },
                                    { key: '4+2 poe switch' },
                                    { key: '1tb hard disk' },
                                    { key: '500 gb hard disk' },
                                    { key: '2tb Hard disk' },
                                    { key: 'Pvc box' },
                                    { key: '2u rack' },
                                    { key: '4u rack' },
                                    { key: 'Rj 45 jack' },
                                    { key: 'Video bloon' },
                                    { key: 'Bnc connector' },
                                    { key: 'Dc pin' },
                                    { key: '4ch SMPS' },
                                    { key: '8ch SMPS' },
                                    { key: '2mp hd dome camera' },
                                    { key: '2mp hd bullet camera' },
                                    { key: 'Cat 6 cable ' },
                                    { key: '3+1 cable' },
                                    { key: 'Cat 6 cable 100 MTR' },
                                    { key: 'Cat 6 cable 200 MTR' },
                                    { key: 'Cat 6 cable 305 mtr ' },
                                ]}

                                renderItem={({ item }) => <>

                                    <TouchableOpacity style={styles.press} onPress={() => selectItem(item.key)}>
                                        <Text style={styles.item}>{item.key}</Text>
                                    </TouchableOpacity>
                                </>}
                            />

                        </ScrollView>
                    </View>
                </View>


                <Pressable style={styles.button} onPress={generatePDF}>
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
            </View>


        </>



    );
};

const styles = StyleSheet.create({
    amount:{
        // backgroundColor:"yellow",
        height:30,
        width:180,
    },
    press: {
        margin: 10
    },
    frameScroll: {
        margin: 10,
        marginLeft: 50
    },
    frame: {
        backgroundColor: '#87CEEB',
        width: "100%",
        height: "50%",
        borderRadius: 20,
        marginTop: '5%',
        boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.6) "

    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white",
    },
    cont: {
        backgroundColor: 'lightgreen',
        height: 40,
        bottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        borderRadius: 10,

    },
    ItemList: {

        marginTop: 10,
        justifyContent: 'center',
        top: 100,
        position: 'static'


    },
    ItemListText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        backgroundColor: 'lightblue',
        width: 120,
        height: 40,
        borderRadius: 8,

    },
    ShopName: {
        textAlign: "center",
        fontSize: 20,
        color: 'Black'
    },
    Date: {
        textAlign: "right",
        marginRight: 100
    },
    button: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 750,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        left: 15, right: 15, bottom: 2

    },
    button1: {
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: 'black',
        position: 'absolute', left: '120%', bottom: 2

    },
    text: {

        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    input: {
        height: 20,
        fontSize: 20,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: "red",
        textAlign: "center"
    },

    item: {
        marginTop: 10,
        padding: 2,
        fontSize: 25,
        color: 'black'
    },

})

export default Appp;
