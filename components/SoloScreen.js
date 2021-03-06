import React from 'react';
import styles from '../Styles/stylesheet';
import { Text, View, Button } from 'react-native';

import levels from '../levels/levels.json';

export default function SoloScreen(props) {
	const { navigation } = props;
	return (
		<View>
			{levels.map((level) => {
				const { title, levels } = level;
				return (
					<Button
						key={title}
						title={title}
						onPress={() => navigation.navigate('LevelList', levels)}
					/>
				);
			})}
		</View>
	);
}
