import React from 'react';
import tw from 'twin.macro';
import { css, cx } from '@emotion/css';

interface ButtonProps {
  buttonText: string;
}

const styles = {
  cssButtonBox: css(tw`w-full text-right`),
  cssButtonText: css(tw`mr-4`),
};

export default function Button({ buttonText }: ButtonProps) {
  return (
    <div className={cx(styles.cssButtonBox)}>
      <span className={cx(styles.cssButtonText)}>{buttonText}</span>
    </div>
  );
}
