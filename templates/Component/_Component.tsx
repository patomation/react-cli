import React, {ReactElement, ReactNode} from 'react';
import styles from './_Component.module.scss';

export interface Props {
  className?: string
  children?: ReactNode
}

export const _Component = ({
  className = '',
  children,
}: Props): ReactElement => {
  return (
    <div className={`${styles._Component} ${className}`}>
      {children}
    </div>
  );
};