import React from 'react'
import { storiesOf } from '@storybook/react'
import Text, {BLUE, RED, YELLOW, ORANGE, GRAY} from '../Text'

storiesOf('Text', module)
  .add('with defaults', () => (
    <Text>Hello World</Text>
  ))
  .add('with BLUE', () => (
    <Text {...{color: BLUE}}>Hello World</Text>
  ))
  .add('with RED', () => (
    <Text {...{color: RED}}>Hello World</Text>
  ))
  .add('with YELLOW', () => (
    <Text {...{color: YELLOW}}>Hello World</Text>
  ))
  .add('with ORANGE', () => (
    <Text {...{color: ORANGE}}>Hello World</Text>
  ))
  .add('with GRAY', () => (
    <Text {...{color: GRAY}}>Hello World</Text>
  ))
