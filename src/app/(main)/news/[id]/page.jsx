async function NewsDetails({ params }) {
  const { id } = await params;
  console.log(id);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-center">{id}</h2>
      <h2 className="text-center text-lg font-medium">NewsDetails</h2>
    </div>
  );
}

export default NewsDetails;
