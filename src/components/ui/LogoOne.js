import { chakra, useToken } from '@chakra-ui/react';

export const LogoOne = props => {
	const { iconColor = 'currentColor', ...rest } = props;
	const color = useToken('colors', iconColor);
	return (
		<chakra.svg viewBox='0 0 411.402 208.138' {...rest}>
			<g transform='translate(2)'>
				<path
					d='M1291.482,1195.3h-71.363v81.87h33.646v17.774h-33.646v26.6h71.363V1244.7h-33.329v-18.959h33.329Z'
					transform='translate(-1040.482 -1130)'
					fill={color}
				/>
				<path
					d='M1299.719,1195.3h71.349v31.9H1337.4v66.822h33.67v27.57h-71.349Z'
					transform='translate(-1040.482 -1130)'
					fill={color}
				/>
				<path
					d='M1379.578,1195.3h70.306v31.215h-33.839v16.927h33.839v33.536h-33.839v16.136h33.839v27.762h-70.306Z'
					transform='translate(-1040.482 -1130)'
					fill={color}
				/>
				<g
					transform='translate(36.518)'
					fill='#fff'
					stroke='currentColor'
					strokeWidth='4'
				>
					<circle cx='35' cy='35' r='35' stroke='none' />
					<circle cx='35' cy='35' r='33' fill='none' />
				</g>
				<path
					d='M33.663,119.412V62.459S24.6,59.6,20.51,71.253,1.727,84.7,1.727,84.7-5.1,73.848,8.4,46.258A281.952,281.952,0,0,1,36.636,0h85.429V119.412Z'
					transform='translate(0 86.726)'
					fill='#fff'
					stroke={color}
					strokeWidth='4'
				/>
				<path
					d='M1100.094,1258.1s-5.94,10.813,2.485,17.2,79.339,32.514,79.339,32.514,4.986,2.452,7.438,0,10.871-14.2,7.886-25.345c-1.033-3.855-10.8-7.313-22.437-12.04-4.116-1.672-8.261-3.321-12.987-5.037-18.351-6.668-37.57-13.126-37.57-13.126a49.877,49.877,0,0,0-12.455-.411,23.937,23.937,0,0,0-9.214,3.324A9.469,9.469,0,0,0,1100.094,1258.1Z'
					transform='translate(-1040.482 -1130)'
					fill={color}
				/>
				<path
					d='M1213.411,1195.3h-69.983v125.616h35.7v-45.942h34.281v-32.4H1179.13v-16.916h34.281Z'
					transform='translate(-1040.482 -1130)'
					fill={color}
				/>
			</g>
		</chakra.svg>
	);
};
