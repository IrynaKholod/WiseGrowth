import React from 'react';
import { LoaderBox } from './Loader.styled';
import { TailSpin } from 'react-loader-spinner';

export class Loader extends React.Component {
  render() {
    return (
      <LoaderBox>
        <TailSpin width="400" color="rgba(72,37,209,255)" />
      </LoaderBox>
    );
  }
}
