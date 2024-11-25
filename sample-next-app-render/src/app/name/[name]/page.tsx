"user server"

const paths = [
  {name: 'Taro'},
  {name: 'Hanako'},
  {name: 'Sachiko'}
];

export async function generateStaticParams() {
  return paths;
}

export default async function Name({ params }: any) {
  const result = paths.some((path) => {
    return path.name === params.name
  });
  return(
    <main>
      { result ?
      <>
        <h1> Name = &quot{params.name}&quot</h1>
        <p>{params.name}さん、こんにちは！</p>
      </>
      :
      <>
        <h1> Name = &quot{params.name}&quot</h1>
        <p>{params.name}は使用不可能です</p>
      </>
      }
      <div>
        <a href="/">Go top page</a>
      </div>
    </main>
  );
}
