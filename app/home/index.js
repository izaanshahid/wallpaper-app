import { View, Text, StyleSheet, Pressable, ScrollView, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { theme } from '../../constants/theme'
import {FontAwesome6, Feather, Ionicons} from '@expo/vector-icons'
import { wp, hp } from '../../helpers/common'
import Categories from "../../components/categories"

const homeScreen = () => {
    const {top} = useSafeAreaInsets();
    const paddingTop = top>0?top+10:30;
    const[search, setSearch] = useState('')
    const searchInputRef = useRef(null)
    const handleClose=()=>{
      setSearch('')
    }

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
        <View style={styles.searchBar}>
          <View style={styles.searchIcon}>
            <Feather name="search" size={24} color={theme.colors.neutral(0.4)} />
          </View>
          <TextInput
          placeholder='Search for photos...'
          style={styles.searchInput}
          value={search}
          ref={searchInputRef}
          onChangeText={value=>setSearch(value)}
          />
          {search&&(
          <Pressable style={styles.closeIcon}
          onPress={handleClose}
          >
            <Ionicons name='close' size={24} color={theme.colors.neutral(0.6)}/>
          </Pressable>
          )}
        </View>

        <View style={styles.categories}>
          <Categories/>
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
    },
    searchBar:{
      marginHorizontal:wp(4),
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      borderWidth:1,
      borderColor:theme.colors.white,
      backgroundColor:theme.colors.white,
      padding:6,
      paddingLeft:10,
      borderRadius:theme.radius.lg
    },
    searchIcon:{
      padding:6,
    },
    searchInput:{
      flex:1,
      borderRadius:theme.radius.sm,
      paddingVertical:8,
      fontSize:hp(1.5)
    },
    closeIcon:{
      backgroundColor:theme.colors.neutral(0.1),
      padding:6,
      borderRadius:theme.radius.sm
    }


})

export default homeScreen