import { Pressable, StyleSheet, Text } from "react-native";
import Svg, { Circle, Rect } from 'react-native-svg';
import React from "react";

interface Param{
    title: string;
    status: string;
}
enum UserStatus
{
    Inaccessible,
    Accessible,
    DoNotDisturb,
    BeRightBack
}

const StatusButton = (param: Param) =>{

    const selectStatus =(property: string) =>{
        switch (property){
            case 'Inaccessible':
                return (<view style={styles.widok}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L12 11.2929L17.6464 5.64646C17.8417 5.4512 18.1583 5.4512 18.3535 5.64646C18.5488 5.84172 18.5488 6.1583 18.3535 6.35357L12.7071 12L18.3535 17.6464C18.5488 17.8417 18.5488 18.1583 18.3535 18.3535C18.1583 18.5488 17.8417 18.5488 17.6464 18.3535L12 12.7071L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L11.2929 12L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z" fill="#D9D9D9"/>
                </svg><Text style={styles.teskt}>{param.title}</Text></view>)
                break;
            case 'Accessible':
                return (<view style={styles.widok}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM19.6005 7.20247C19.8067 7.38614 19.825 7.70219 19.6413 7.9084L10.2774 18.4218C10.2612 18.44 10.244 18.4567 10.2259 18.4719C10.2144 18.4839 10.2022 18.4954 10.1893 18.5064C9.97928 18.6856 9.66369 18.6606 9.48444 18.4506L6.75481 15.2516C6.57557 15.0415 6.60055 14.7259 6.81062 14.5467C7.02068 14.3674 7.33627 14.3924 7.51552 14.6025L9.87603 17.3689L18.8946 7.2433C19.0782 7.03709 19.3943 7.01881 19.6005 7.20247Z" fill="#37B744"/>
                </svg><Text style={styles.teskt}>{param.title}</Text></view>)
                break;
            case 'DoNotDisturb':
                return (<view style={styles.widok}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#DF2B2B"/>
                </svg><Text style={styles.teskt}>{param.title}</Text></view>)
                break;
            case 'BeRightBack':
                return (<view style={styles.widok}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM11.5001 12.5588L11.5002 12.5686C11.4966 12.7072 11.5502 12.8465 11.6597 12.9482L16.0678 17.0428C16.2701 17.2307 16.5865 17.219 16.7744 17.0167C16.9624 16.8144 16.9507 16.498 16.7484 16.3101L12.5001 12.3639V3.5C12.5001 3.22386 12.2762 3 12.0001 3C11.7239 3 11.5001 3.22386 11.5001 3.5V12.5588Z" fill="#FED815"/>
                </svg>                
                <Text style={styles.teskt}>{param.title}</Text></view>)
                break;
            default:
                return (<view style={styles.widok}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                </svg><Text style={styles.teskt}>{param.title}</Text></view>)
                break;

        }
    }
    return(
        <Pressable style={styles.button}>
            {selectStatus(param.status)}
            
        </Pressable>
    );
};
export default StatusButton;

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        color:'#000000',
        width: 232,
        height: 44,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 10,
        shadowColor: '#0000001A',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 6,
      },
      widok:{
        display: 'flex',
      },
      koleczko:{
        width:24,
        height: 24,
        backgroundColor: '#D9D9D9',
        borderRadius:12,
      },
      teskt:{
        paddingLeft: 10,
        paddingTop: 2,
      }





});
