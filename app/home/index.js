import { View, Text, StyleSheet, Pressable, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { theme } from '../../constants/theme'
import {FontAwesome6} from '@expo/vector-icons'
import { wp, hp } from '../../helpers/common'

const homeScreen = () => {
    const {top} = useSafeAreaInsets();
    const paddingTop = top>0?top+10:30;
  return (
    <View style={[styles.container, {paddingTop}]}>
      <View style={styles.header}>
        <Pressable>
            <Text style={styles.title}>
                Pixels
            </Text>
        </Pressable>
        <Pressable>
            <FontAwesome6 name= 'bars-staggered' size={22} color={theme.colors.neutral(0.7)}/>
        </Pressable>
      </View>

      <ScrollView
      contentContainerStyle={{gap:15, marginHorizontal:wp(4)}}
      >
        <View style={{width:wp(90), borderWidth:2, alignSelf:'center', flexDirection:'row', height:hp(4), borderRadius:theme.radius.md, borderColor:'grey', alignItems:'center', paddingHorizontal:wp(1)}}>
            <FontAwesome6 name="magnifying-glass" size={22} color={theme.colors.neutral(0.7)}/>
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:15,
    },
    header:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:wp(4),
        alignItems:'center'
    },
    title:{
        fontSize:hp(3),
        fontWeight:theme.fontWeights.semibold,
        color:theme.colors.neutral(0.9)
    }

})

export default homeScreen