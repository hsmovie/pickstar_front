import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import bellImage from '../../assets/images/png/white_arrow.png'
import logoImage from '../../assets/images/png/logo.png'
import SearchIconImage from '../../assets/images/png/white_arrow.png'
import { ButtonWithFeedback } from '../common'
import LinearGradient from 'react-native-linear-gradient'
class MainGradationHeader extends Component {


    navigate = (path) => () => {
        navigationService.navigate(path)
    }

    render() {
        return (
            <View style={styles.headerStyle}>
                <LinearGradient colors={['#f78462', '#fe5167']} style={styles.gradientStyle} >
                <ButtonWithFeedback>
                    <Image source={bellImage} style={styles.bellIconStyle} />
                    </ButtonWithFeedback>
                    <ButtonWithFeedback>
                    <Image source={logoImage} style={styles.logoStyle} />
                    </ButtonWithFeedback>
                    <ButtonWithFeedback>
                    <Image source={SearchIconImage} style={styles.SearchIconStyle} />
                    </ButtonWithFeedback>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        height: 100,
        width: Dimensions.get('window').width,
    },
    gradientStyle:{
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop:20,
    },
    bellIconStyle: {
        height: 30,
        width: 30,
        marginLeft:10,
    },
    logoStyle:{
    },
    SearchIconStyle: {
        height: 30,
        width: 30,
        marginRight:10,
    },
    
});

export { MainGradationHeader }
