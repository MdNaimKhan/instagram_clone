import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from '../../config'

class Post extends Component {


    constructor() {
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
        };
    }

    likeToggled() {
        this.setState({
            liked: !this.state.liked,
        })
    }




    render() {

       // const imageHeight = Math.floor(this.state.screenWidth * (1.12));
        const imageUri = "https://drive.google.com/uc?id=1FPa9iryPEzXFH-sTYN4zMrt_C2O-j9GH";

        const heartIconColor = (this.state.liked) ? 'red' : null;






        return (

            <View>
                
                <View style={styles.userBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={styles.userPic}
                            source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                        />
                        <Text>Abu Dhabi</Text>


                    </View>
                    <View style={{ alignContent: 'center', marginTop: -5, marginRight: 10 }}>
                        <Text style={{ fontSize: 30 }}>...</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{ height: 65  + "%", }}
                    activeOpacity={0.7}
                    onPress={() => {
                        this.likeToggled();
                    }}>
                    <Image
                        style={{ width: this.state.screenWidth, height: 100 + "%", }}
                        source={{
                            uri: imageUri
                        }}
                    />
                </TouchableOpacity>

                <View style={styles.iconBar}>

                    <Image style={[styles.icon, { height: 40, width: 40, tintColor: heartIconColor }]} source={config.images.heartIcon} />
                    <Image style={[styles.icon, { height: 36, width: 36 }]} source={config.images.chatIcon} />
                    <Image style={[styles.icon, { height: 30, width: 36, tintColor: 'green' }]} source={config.images.arrowIcon} />



                </View>

                <View style={styles.commentBar}>
                    <Image style={[
                        styles.icon, 
                        { height: 30, width: 30}]} source={config.images.heartIcon} />

                    <Text>120 Likes</Text>    

                </View>


            </View>


        );
    }
};


const styles = StyleSheet.create({
    tempNav: {
        width: 100 + '%',
        height: 56,
        marginTop: 10,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },

    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    userPic: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',

    },
    icon: {
        marginHorizontal: 5,
       
    },
    commentBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems:'center'

    }



})


export default Post;