export const Sample = () => {
  const data = new Array(100).fill('hello')

  return (
    <div className="p-4">
      <h3 className="mb-2 text-xl font-semibold">Data</h3>
      {data.map((value, index) => {
        return <p key={`idx-${index}`}>{value}</p>
      })}
    </div>
  )
}
