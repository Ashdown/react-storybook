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

type H3Props = {
    children: React.ReactNode,
    className: string,
}

const H3 = (props:H3Props) => <BT className={props.className} type="h3">{props.children}</BT>

H3.PrimaryHeading = (props:H3Props) => <PH type="h3">{props.children}</PH>
H3.SecondaryHeading = (props:H3Props) => <SH type="h3">{props.children}</SH>
H3.TertiaryHeading = (props:H3Props) => <TH type="h3">{props.children}</TH>
H3.QuaternaryHeading = (props:H3Props) => <QH type="h3">{props.children}</QH>
H3.AbstractText = (props:H3Props) => <AT type="h3">{props.children}</AT>
H3.BodyText = (props:H3Props) => <BT className={props.className} type="h3">{props.children}</BT>
H3.SmallText = (props:H3Props) => <ST type="h3">{props.children}</ST>
H3.UnimportantText = (props:H3Props) => <UT type="h3">{props.children}</UT>
H3.TechnicalText = (props:H3Props) => <TT type="h3">{props.children}</TT>

export default H3