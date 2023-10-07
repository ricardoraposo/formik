'use client'

import char from "@/services/characterService"
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";

export default function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ['charList'],
    queryFn: () => char.getAllByQuery(formik.values.name),
  })

  const formik = useFormik({
    initialValues: { name: '' },
    onSubmit: async () => refetch()
  })


  if (isLoading) return <p>Carregando...</p>;
  return (
    <div>
      <h1>Hello Ricky</h1>
      <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
      <button onClick={() => formik.handleSubmit()}>Search</button>
      <div>
        {data?.data.results.map((char) => (
          <p key={char.id}>{char.name}</p>
        ))}
      </div>
    </div>
  )
}
