import React, {Component} from 'react'
import {PageFrame} from "../../../../src/layout";
import {Form, ToggleSwitch} from "../../../../src/inputs"


const InputWrapper = ({children}) =>
    <PageFrame>
        <Form
            onChange={data => console.log('onChange', data)}
            onSubmit={data => console.log('onSubmit', data)}
            onValidSubmit={data => console.log('onValidSumbit', data)}
        >
            {children}
            <button type="submit" class="square-button white-red wide">
                Submit
            </button>
        </Form>
    </PageFrame>


export default class SpecialSection extends Component {

    state = {}

    render() {
        return (
            <section class="default-section">
                <PageFrame colour='grey'>
                    <h2 class="demo-header-secondary">Special Inputs</h2>
                    <h3 class="demo-header-tertiary">Toggle Switch</h3>
                    <p class="demo-description">
                        Returns true or false.  Is essentially a heavily styled checkbox.
                    </p>

                </PageFrame>

                <InputWrapper>
                    <ToggleSwitch.Controlled name="square-toggle-switch">
                        Standard Mode
                    </ToggleSwitch.Controlled>
                    <ToggleSwitch.Controlled name="square-toggle-switch-red" colour="red">
                        Red Mode
                    </ToggleSwitch.Controlled>
                </InputWrapper>

            </section>
        )
    }

}
