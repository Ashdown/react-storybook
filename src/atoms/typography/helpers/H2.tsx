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

type H2Props = {
    children: React.ReactNode,
    className: string,
}

const H2 = (props:H2Props) => <BT className={props.className} type="h2">{props.children}</BT>

H2.PrimaryHeading = (props:H2Props) => <PH type="h2">{props.children}</PH>
H2.SecondaryHeading = (props:H2Props) => <SH type="h2">{props.children}</SH>
H2.TertiaryHeading = (props:H2Props) => <TH type="h2">{props.children}</TH>
H2.QuaternaryHeading = (props:H2Props) => <QH type="h2">{props.children}</QH>
H2.AbstractText = (props:H2Props) => <AT type="h2">{props.children}</AT>
H2.BodyText = (props:H2Props) => <BT className={props.className} type="h2">{props.children}</BT>
H2.SmallText = (props:H2Props) => <ST type="h2">{props.children}</ST>
H2.UnimportantText = (props:H2Props) => <UT type="h2">{props.children}</UT>
H2.TechnicalText = (props:H2Props) => <TT type="h2">{props.children}</TT>

export default H2