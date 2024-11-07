import Link from "next/link";


interface DataProps {
  title: string;
  msg: string;
}

export default function Other({ data1, data2 }: { data1: DataProps, data2: DataProps }) {
  return (
    <main>
      <div>
        <p>This is another page static data1</p>
        <p>{data1.title}</p>
        <p>{data1.msg}</p>
      </div>
      <div>
        <p>This is another page static data2</p>
        <p>{data2.title}</p>
        <p>{data2.msg}</p>
      </div>
      <div>
        <Link href="/">Go back</Link>
      </div>
    </main>
  );
}

export function getStaticProps({ params: {} }) {
  const Data1 = {
    title: 'Other page',
    msg: 'This is static property sample page'
  }
  const Data2 = {
    title: 'Other page!!',
    msg: 'This is static property sample page!!'
  }
  return {
    props:  // ここのキーの props は固定 
      {
        data1: Data1,  // ここのキーの data は、上の関数の引数として使用される
        data2: Data2
      }
  };
}
