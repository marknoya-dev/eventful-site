function Page({ params }: { params: { id: string } }) {
  return <div>hey {params.id}</div>;
}

export default Page;
