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

const Label = (props:pProps) => <BT type="label">{props.children}</BT>

Label.PrimaryHeading = (props:pProps) => <PH type="label">{props.children}</PH>
Label.SecondaryHeading = (props:pProps) => <SH type="label">{props.children}</SH>
Label.TertiaryHeading = (props:pProps) => <TH type="label">{props.children}</TH>
Label.QuaternaryHeading = (props:pProps) => <QH type="label">{props.children}</QH>
Label.AbstractText = (props:pProps) => <AT type="label">{props.children}</AT>
Label.BodyText = (props:pProps) => <BT type="label">{props.children}</BT>
Label.SmallText = (props:pProps) => <ST type="label">{props.children}</ST>
Label.UnimportantText = (props:pProps) => <UT type="label">{props.children}</UT>
Label.TechnicalText = (props:pProps) => <TT type="label">{props.children}</TT>

export default Label