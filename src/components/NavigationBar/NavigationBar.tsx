import React, { FC } from 'react';

// Context
import { ThemeSwitch } from '../../contexts/ThemeContext';

// Components
// import { MenuButton } from '../MenuButton';

// Styles
import cx from 'classnames';
import cn from './NavigationBar.scss';

interface NavigationBarProps {
	className?: string;
	testId?: string;
	loggedIn?: boolean;
}

export const NavigationBar: FC<NavigationBarProps> = (props) => {
	return (
		<nav
			data-testid={props.testId}
			className={cx(cn.navigationBar, props.className)}
		>
			<div className={cn.left}>
				<a href="/">
					<svg
						width="192"
						height="100"
						viewBox="0 0 192 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M168 74H160L184 50L160 26L168 26L192 50L168 74Z" />
						<path d="M71.1802 36.6C76.4602 36.6 80.6469 38.1467 83.7402 41.24C86.8869 44.28 88.4602 48.7333 88.4602 54.6V79H82.7802V55.16C82.7802 50.7867 81.6869 47.4533 79.5002 45.16C77.3136 42.8667 74.1936 41.72 70.1402 41.72C65.6069 41.72 62.0069 43.08 59.3402 45.8C56.7269 48.4667 55.4202 52.1733 55.4202 56.92V79H49.7402V36.92H55.1802V44.68C56.7269 42.12 58.8602 40.1467 61.5802 38.76C64.3536 37.32 67.5536 36.6 71.1802 36.6Z" />
						<path d="M125.561 36.6C129.508 36.6 133.081 37.5067 136.281 39.32C139.481 41.08 141.988 43.5867 143.801 46.84C145.614 50.0933 146.521 53.8 146.521 57.96C146.521 62.12 145.614 65.8267 143.801 69.08C141.988 72.3333 139.481 74.8667 136.281 76.68C133.081 78.4933 129.508 79.4 125.561 79.4C122.041 79.4 118.868 78.6533 116.041 77.16C113.268 75.6667 111.028 73.5067 109.321 70.68V79H103.881V19.64H109.561V44.92C111.321 42.2 113.561 40.1467 116.281 38.76C119.054 37.32 122.148 36.6 125.561 36.6ZM125.161 74.36C128.094 74.36 130.761 73.6933 133.161 72.36C135.561 70.9733 137.428 69.0267 138.761 66.52C140.148 64.0133 140.841 61.16 140.841 57.96C140.841 54.76 140.148 51.9067 138.761 49.4C137.428 46.8933 135.561 44.9733 133.161 43.64C130.761 42.2533 128.094 41.56 125.161 41.56C122.174 41.56 119.481 42.2533 117.081 43.64C114.734 44.9733 112.868 46.8933 111.481 49.4C110.148 51.9067 109.481 54.76 109.481 57.96C109.481 61.16 110.148 64.0133 111.481 66.52C112.868 69.0267 114.734 70.9733 117.081 72.36C119.481 73.6933 122.174 74.36 125.161 74.36Z" />
						<path d="M24 26H32L8 50L32 74H24L0 50L24 26Z" />
					</svg>
				</a>
			</div>
			<div className={cn.right}>
				<ThemeSwitch className={cn.themeSwitch} />
			</div>
		</nav>
	);
};
