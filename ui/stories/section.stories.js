import React from 'react';
import { storiesOf } from '../.storybook/facade';
import Section from '../src/section';


storiesOf('Section', module)
  .add('pie chart', () => (
    <Section config={{
      section: {
        dimensions: {
          渠道: {
            toSlicer: 'channel',
          },
        },
        chartType: 'pie',
      },
    }}
    />
  ));
