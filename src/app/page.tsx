'use client';

import char from '@/services/characterService';
import { useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import MapRick from './MapRick';

export interface ICharacter {
	id: number;
	name: string;
	image: string;
}

interface IError {
	response: {
		data: {
			error: string;
		};
	};
}
export default function Home() {
	const { isLoading, data, refetch, isError, error } = useQuery({
		queryKey: ['charList'],
		queryFn: () =>
			char.getAllByQuery({
				name: formik.values.name,
				status: formik.values.status,
			}),
		retry: 0,
		select: ({ data }) => data,
	});

	const formik = useFormik({
		initialValues: { name: '', status: '' },
		onSubmit: async () => {
			refetch();
		},
	});

	return (
		<div>
			<h1>Hello Ricky</h1>
			<input
				type="text"
				value={formik.values.name}
				onChange={(e) => formik.setFieldValue('name', e.target.value)}
			/>
			<select
				name="status"
				value={formik.values.status}
				onChange={formik.handleChange}
			>
				<option defaultChecked value="">
					Selecione o Status
				</option>
				<option value="Alive">Vivo</option>
				<option value="Dead">Morto</option>
				<option value="unknown">Desconhecido</option>
			</select>
			<button onClick={() => formik.handleSubmit()}>Search</button>
			<div>
				{isError ? (
					(error as IError).response.data.error
				) : (
					<>
						{!isLoading ? (
							<>
								{data?.results?.map((char: ICharacter) => (
									<MapRick key={char.id} {...char} />
								))}
							</>
						) : (
							'Carregando...'
						)}
					</>
				)}
			</div>
		</div>
	);
}
