import React from 'react'
import {PageFrame} from "../../../../src/layout";

const PaletteSection = () =>
    <section class="palette-section">
        <PageFrame colour='grey'>
            <h2 class="demo-header-secondary">Palette</h2>
            <h3 class="demo-header-tertiary">Grey Palette</h3>
        </PageFrame>
        <PageFrame>
            <ul class="demo-colour-list">
                <li class="demo-colour-box black">Black</li>
                <li class="demo-colour-box basalt">Basalt</li>
                <li class="demo-colour-box gabbro">Gabbro</li>
                <li class="demo-colour-box andesite">Andesite</li>
                <li class="demo-colour-box granite">Granite</li>
                <li class="demo-colour-box pumice">Pumice</li>
                <li class="demo-colour-box white">White</li>

            </ul>
        </PageFrame>
        <PageFrame colour='grey'>
            <h3 class="demo-header-tertiary">Candidate Palette</h3>
        </PageFrame>
        <PageFrame>
            <ul class="demo-colour-list">
                <li class="demo-colour-box red">Red</li>
                <li class="demo-colour-box dark-red">Dark Red</li>
                <li class="demo-colour-box jaffa-orange">Jaffa Orange</li>
                <li class="demo-colour-box dark-jaffa-orange ellipsis">Dark Jaffa Orange</li>
                <li class="demo-colour-box mustache-brown ellipsis">Mustache Brown</li>
            </ul>
        </PageFrame>
        <PageFrame colour='grey'>
            <h3 class="demo-header-tertiary">Company Palette</h3>
        </PageFrame>
        <PageFrame>
            <ul class="demo-colour-list">
                <li class="demo-colour-box blue">Blue</li>
                <li class="demo-colour-box mint">Mint</li>
                <li class="demo-colour-box dark-mint">Dark Mint</li>
                <li class="demo-colour-box trench-blue">Trench Blue</li>
                <li class="demo-colour-box grape-purple">Grape Purple</li>
            </ul>
        </PageFrame>
    </section>

export default PaletteSection