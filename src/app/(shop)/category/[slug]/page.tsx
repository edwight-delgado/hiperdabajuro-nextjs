interface Props {
  params: {
    slug: string;
  };
}

export default function ({ params }: Props) {
  const { slug } = params;
  return <h1>page categoria {slug}</h1>;
}
