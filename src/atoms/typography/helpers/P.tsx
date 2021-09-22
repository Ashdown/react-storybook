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
    className: string,
}

const P = (props:pProps) => <BT className={props.className} type="p">{props.children}</BT>

P.PrimaryHeading = (props:pProps) => <PH type="p">{props.children}</PH>
P.SecondaryHeading = (props:pProps) => <SH type="p">{props.children}</SH>
P.TertiaryHeading = (props:pProps) => <TH type="p">{props.children}</TH>
P.QuaternaryHeading = (props:pProps) => <QH type="p">{props.children}</QH>
P.AbstractText = (props:pProps) => <AT type="p">{props.children}</AT>
P.BodyText = (props:pProps) => <BT className={props.className} type="p">{props.children}</BT>
P.SmallText = (props:pProps) => <ST type="p">{props.children}</ST>
P.UnimportantText = (props:pProps) => <UT type="p">{props.children}</UT>
P.TechnicalText = (props:pProps) => <TT type="p">{props.children}</TT>

export default P