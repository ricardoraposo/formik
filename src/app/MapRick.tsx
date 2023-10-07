import { ICharacter } from './page';
function MapRick({ id, name, image }: ICharacter) {
	return (
		<div>
			<p>{name}</p>
			<img src={image} alt="" style={{ width: '200px' }} />
		</div>
	);
}

export default MapRick;
