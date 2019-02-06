import { Theme } from '@meetfranz/theme';
import classnames from 'classnames';
import React, { Component } from 'react';
import injectStyle from 'react-jss';
import ReactLoader from 'react-loader';

import { IWithStyle } from '../typings/generic';

interface IProps extends IWithStyle {
  className?: string;
}

const styles = (theme: Theme) => ({
  container: {
    position: 'relative',
    height: 60,
  },
});

class LoaderComponent extends Component<IProps> {
  render() {
    const {
      classes,
      className,
      theme,
    } = this.props;

    return (
      <div
        className={classnames({
          [classes.container]: true,
          [`${className}`]: className,
        })}
        data-type="franz-loader"
      >
        <ReactLoader
          loaded={false}
          width={4}
          scale={0.75}
          color={theme.colorText}
          parentClassName={classes.loader}
        />
      </div>
    );
  }
}

export const Loader = injectStyle(styles)(LoaderComponent);
