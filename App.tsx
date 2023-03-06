import * as React from 'react';
import './style.css';
import { Input2, PassowrdInput } from './styled component/StyledComp2';
import {
  Button,
  Inputs,
  Label,
  Diffbutton,
  Input,
  ReversedButton,
  Title,
  Wrapper,
  LabelText,
} from './styled component/StyledComponent';

export default function App() {
  return (
    <div>
      <Wrapper bg="grey">
        <Title>
          <h1>Hello !</h1>
        </Title>

        <Button primary>hello</Button>
        <Button scondary as="a">
          hello
        </Button>
        <Diffbutton as={ReversedButton}>diffButton</Diffbutton>
        <Input defaultValue="color passed from props" inputcolor="red" />
        <Input defaultValue="default color" />

        {/* checkbox */}
        <React.Fragment>
          <Label>
            <Inputs defaultChecked />
            <LabelText $mode="dark">check with passing attributes</LabelText>
            <Inputs defaultChecked />
            <LabelText>check without passing</LabelText>
            <Inputs defaultChecked />
            <LabelText $mode="dark">text</LabelText>
            <Inputs defaultChecked />
            <LabelText>text</LabelText>
            <Inputs defaultChecked />
            <LabelText $mode="lite">
              this is checkbox passing lite attribute{' '}
            </LabelText>
          </Label>
        </React.Fragment>
      </Wrapper>

      <Wrapper bg="green">
        <Input2 placeholder="bigger text input " size="2rem" />

        <br />
        <PassowrdInput placeholder="of type password" size="2rem" />
      </Wrapper>
    </div>
  );
}
