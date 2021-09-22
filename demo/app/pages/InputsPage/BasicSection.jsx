import React, {Component} from 'react'
import {PageFrame} from "../../../../src/layout";
import {Form, TextInput, Checkbox} from "../../../../src/inputs"


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


export default class BasicSection extends Component {

    state = {}

    render() {
        return (
            <section class="default-section">
                <PageFrame colour='grey'>
                    <h2 class="demo-header-secondary">Basic Inputs</h2>
                    <h3 class="demo-header-tertiary">Text Input</h3>
                    <p class="demo-description">
                        Standard text input for one line of text
                    </p>

                </PageFrame>
                <InputWrapper>
                    <TextInput.Controlled name="text-input-red" isSquare placeholder="Placeholder text" label="Example input label" required/>
                    <TextInput.Controlled name="text-input-blue" isSquare placeholder="Placeholder text" label="Example input label" required colour="blue"/>
                </InputWrapper>

                <PageFrame colour='grey'>
                    <h3 class="demo-header-tertiary">Checkbox</h3>
                    <p class="demo-description">
                        Returns true or false.  Can be red or blue.
                    </p>

                </PageFrame>
                <InputWrapper>
                    <Checkbox.Controlled name="complicated-form-checkbox-red" checkboxlabel="Red Checkbox"/>
                    <Checkbox.Controlled name="complicated-form-checkbox-blue" checkboxlabel="Blue Checkbox (with Postscript)" postscript="Lorem ipsum" colour="blue"/>
                </InputWrapper>

            </section>
        )
    }

}
