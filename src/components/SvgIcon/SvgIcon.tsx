/**
 * @name SvgIcon
 * @author Lester
 * @date 2021-05-08 14:28
 */

import React from 'react';
import classNames from 'classnames';

interface IndexProps {
    className?: string;
    name: string;
}

const SvgIcon: React.FC<IndexProps> = ({ className, name }) => {
  return (
        <svg className={classNames('icon', className)} aria-hidden="true">
            <use xlinkHref={`#${name}`} />
        </svg>
  );
};

export default SvgIcon;
