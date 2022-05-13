import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from '../../Utils/Color';
import AddIcon from '../../Icons/AddIcon';
import { styles } from './styles'
import DeleteIcon from '../../Icons/DeleteIcon';
import RemoveIcon from '../../Icons/RemoveIcon';

export default Cartitem = (props) => {
    const [count, setCount] = useState(1);
    return (
        <TouchableOpacity style={styles.item}
            onPress={props.onPress}>
            <View style={styles.viewImg}>
                <Image style={styles.imgLogo} source={props.img} />
            </View>
            <View style={{ flex: 2, paddingLeft: 20, justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{props.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: Colors.black, fontSize: 13 }}>Màu : </Text>
                    <Text style={{ color: Colors.black, fontSize: 13 }}>{props.colorProduct}</Text>
                </View>
                <Text style={styles.price}>{props.price}đ</Text>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ padding: 2 }}
                            onPress={() => count < 1 ? setCount(0) : setCount(count - 1)}>
                            <RemoveIcon color={Colors.purple} />
                        </TouchableOpacity>
                        <Text style={{
                            color: Colors.purple, paddingHorizontal: 7, fontWeight: 'bold',
                            fontSize: 15
                        }}>{count}</Text>
                        <TouchableOpacity style={{ padding: 2 }}
                            onPress={() => setCount(count + 1)}>
                            <AddIcon color={Colors.purple}></AddIcon>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ padding: 2 }}
                            onPressDelete={props.onPressDelete}>
                            <DeleteIcon color={Colors.orange} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};