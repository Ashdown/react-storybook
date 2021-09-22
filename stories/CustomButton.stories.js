import React from 'react';
import {CustomButton} from "../src/";
import {TypeButton} from "../src/"

export default {title: 'Custom Button'};

export const DefaultText = () => <CustomButton/>

export const CustomText = () => <CustomButton text="Custom Text"/>

export const TypeButtonCustomText = () => <TypeButton text="Type Button"/>

