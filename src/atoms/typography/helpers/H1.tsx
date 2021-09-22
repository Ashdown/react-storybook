import React from 'react';
import { default as PH } from '../PrimaryHeading'
import { default as SH } from '../SecondaryHeading'
import { default as TH } from '../TertiaryHeading'
import { default as QH } from '../QuaternaryHeading'
import { default as AT } from '../AbstractText'
import { default as BT } from '../BodyText'
import { default as ST } from '../SmallText'
import { default as UT } from '../UnimportantText'
import { default as TT } from '../TechnicalText'

type H1Props = {
    children: React.ReactNode,
    className: string,
}

const H1 = (props:H1Props) => <BT className={props.className} type="h1">{props.children}</BT>

H1.PrimaryHeading = (props:H1Props) => <PH type="h1">{props.children}</PH>
H1.SecondaryHeading = (props:H1Props) => <SH type="h1">{props.children}</SH>
H1.TertiaryHeading = (props:H1Props) => <TH type="h1">{props.children}</TH>
H1.QuaternaryHeading = (props:H1Props) => <QH type="h1">{props.children}</QH>
H1.AbstractText = (props:H1Props) => <AT type="h1">{props.children}</AT>
H1.BodyText = (props:H1Props) => <BT className={props.className} type="h1">{props.children}</BT>
H1.SmallText = (props:H1Props) => <ST type="h1">{props.children}</ST>
H1.UnimportantText = (props:H1Props) => <UT type="h1">{props.children}</UT>
H1.TechnicalText = (props:H1Props) => <TT type="h1">{props.children}</TT>

export default H1