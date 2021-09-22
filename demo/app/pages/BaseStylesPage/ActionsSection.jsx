import React from 'react'
import {PageFrame} from "../../../../src/layout";

const ActionsSection = () =>
    <section class="actions-section">
        <PageFrame colour='grey'>
            <h2 class="demo-header-secondary">Actions</h2>
            <p class="demo-description">
                Buttons should follow the following hierarchy and colour scheme based on the type of actions. Examples
                of
                'best' actions include making a job offer or accepting an interview request. Examples of 'good' actions
                include making an interview request or shortlisting a candidate. Examples of 'neutral' actions include
                declaring interest in a job. Examples of negative actions include declining an interview request or
                rejecting
                a candidate</p>
        </PageFrame>

        <PageFrame>
            <ul class="buttons-list">
                <li>
                    <button class="square-button isometric red wide">Best Action</button>
                </li>
                <li>
                    <button class="square-button red-red wide">Good Action</button>
                </li>
                <li>
                    <button class="square-button transparent-red wide">Neutral Action</button>
                </li>
                <li>
                    <button class="square-button transparent-grey wide">Bad Action</button>
                </li>
                <li>
                    <button class="square-button transparent-grey wide">Super User Only Action</button>
                </li>
            </ul>
        </PageFrame>

        <PageFrame colour='grey'>
            <h3 class="demo-header-tertiary">Block Buttons</h3>
            <p class="demo-description">
                Block buttons should only be used to represents the best possible action you can take, and should be limited to one per subject (i.e. one per job on a page)
            </p>
        </PageFrame>
        <PageFrame>
            <ul class="buttons-list">
                <li>
                    <button class="square-button isometric red">Red</button>
                </li>
                <li>
                    <button class="square-button isometric white">White</button>
                </li>
                <li>
                    <button class="square-button isometric red-invert">Red Invert</button>
                </li>
            </ul>
        </PageFrame>
        <PageFrame colour='grey'>
            <h3 class="demo-header-tertiary">Square Buttons</h3>
        </PageFrame>
        <PageFrame>
            <ul class="buttons-list">
                <li>
                    <button class="square-button red-red">Red, Red</button>
                </li>
                <li>
                    <button class="square-button red-white">Red, White</button>
                </li>
                <li>
                    <button class="square-button white-red">White, red</button>
                </li>
                <li>
                    <button class="square-button white-grey">White, grey</button>
                </li>
                <li>
                    <button class="square-button white-blue">White, blue</button>
                </li>
                <li>
                    <button class="square-button white-white">White, White</button>
                </li>
                <li>
                    <button class="square-button transparent-red">Transparent, Red</button>
                </li>
                <li>
                    <button class="square-button transparent-grey">Transparent, Grey</button>
                </li>
                <li>
                    <button class="square-button transparent-yellow">Transparent, Yellow</button>
                </li>
                <li>
                    <button class="square-button mint-mint">Mint, Mint</button>
                </li>
                <li>
                    <button class="square-button mint-transparent">Mint, Transparent</button>
                </li>
                <li>
                    <button class="square-button white-white-red">White, White, Red</button>
                </li>
                <li>
                    <button class="square-button white-white-blue">White, White, Blue</button>
                </li>
                <li>
                    <button class="square-button transparent-transparent">Transparent, Transparent</button>
                </li>
                <li>
                    <button class="square-button transparent-white">Transparent, White</button>
                </li>
            </ul>
        </PageFrame>
    </section>

export default ActionsSection