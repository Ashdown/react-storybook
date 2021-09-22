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

const Li = (props:pProps) => <BT type="li">{props.children}</BT>

Li.PrimaryHeading = (props:pProps) => <PH type="li">{props.children}</PH>
Li.SecondaryHeading = (props:pProps) => <SH type="li">{props.children}</SH>
Li.TertiaryHeading = (props:pProps) => <TH type="li">{props.children}</TH>
Li.QuaternaryHeading = (props:pProps) => <QH type="li">{props.children}</QH>
Li.AbstractText = (props:pProps) => <AT type="li">{props.children}</AT>
Li.BodyText = (props:pProps) => <BT type="li">{props.children}</BT>
Li.SmallText = (props:pProps) => <ST type="li">{props.children}</ST>
Li.UnimportantText = (props:pProps) => <UT type="li">{props.children}</UT>
Li.TechnicalText = (props:pProps) => <TT type="li">{props.children}</TT>

export default Li