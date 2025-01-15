import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images';
import icons from '@/constants/icons';

interface Props {
    onPress?: () => void;
  
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
      <TouchableOpacity onPress={onPress} className='relative flex flex-col items-start w-60 h-80'>
            <Image source={images.japan} className='size-full rounded-2xl' />
            <Image source={images.cardGradient} className='absolute bottom-0 size-full rounded-2xl' />
            
            <View className='flex flex-row items-center px-3 bg-white/90 py-1.5 rounded-full absolute top-5 right-5'>
                <Image source={icons.star} className='size-3.5' />
                <Text className='ml-1 text-xs font-rubik-bold text-primary-300'>4.5</Text>
            </View>
                <View className='absolute flex flex-col items-start bottom-5 inset-x-5'>
                    <Text className='text-xl text-white font-rubik-extrabold' numberOfLines={1} >Modern Apartment</Text>
                    <Text className='text-base text-white font-rubik'>22 W 15th St, New York</Text>
                <View className='flex flex-row items-center justify-between w-full '>
                    <Text className='text-xl text-white font-rubik-extrabold'>$2,500</Text>
                    <Image source={icons.heart} className='size-5'/>
                </View>
            </View>
      </TouchableOpacity>
  )
}

export const Card = ({ onPress }: Props) => {
    return (
      <TouchableOpacity onPress={onPress} className='relative flex-1 w-full px-3 py-4 mt-4 bg-white rounded-lg shadow-lg shadow-black-100/70'>
        <View className='absolute z-50 flex flex-row items-center p-1 px-2 rounded-full top-5 right-5 bg-white/90'>
                <Image source={icons.star} className='size-2.5' />
                <Text className='text-xs font-rubik-bold text-primary-300 ml-0.5'>4.5</Text>
        </View>
        <Image source={images.newYork} className='w-full h-40 rounded-lg' />
            <View className='flex flex-col mt-2'>
                <Text className='text-base text-black-300 font-rubik-bold'>Cozy Studio</Text>
                <Text className='text-xs text-black-100 font-rubik'>22 W 15th St, New York</Text>
                <View className='flex flex-row items-center justify-between mt-2'>
                        <Text className='text-base text-primary-300 font-rubik-bold'>$2,500</Text>
                        <Image source={icons.heart} className='w-5 h-5 mr-2'tintColor="#191d31"/>
                </View>
            </View>
      </TouchableOpacity>
    )
  }