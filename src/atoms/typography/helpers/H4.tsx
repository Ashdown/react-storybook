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

interface pProps {
    children: React.ReactNode,
}

const H4 = (props:pProps) => <BT type="h4">{props.children}</BT>

H4.PrimaryHeading = (props:pProps) => <PH type="h4">{props.children}</PH>
H4.SecondaryHeading = (props:pProps) => <SH type="h4">{props.children}</SH>
H4.TertiaryHeading = (props:pProps) => <TH type="h4">{props.children}</TH>
H4.QuaternaryHeading = (props:pProps) => <QH type="h4">{props.children}</QH>
H4.AbstractText = (props:pProps) => <AT type="h4">{props.children}</AT>
H4.BodyText = (props:pProps) => <BT type="h4">{props.children}</BT>
H4.SmallText = (props:pProps) => <ST type="h4">{props.children}</ST>
H4.UnimportantText = (props:pProps) => <UT type="h4">{props.children}</UT>
H4.TechnicalText = (props:pProps) => <TT type="h4">{props.children}</TT>

export default H4