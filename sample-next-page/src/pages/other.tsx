import Link from "next/link";


interface DataProps {
    title: string;
    msg: string;
}

export default function Other({ data }: { data: DataProps }) {
    return (
        <main>
            <h1>Other page</h1>
            <p>{data.title}</p>
            <p>{data.msg}</p>
            <p>This is another page</p>
            <div><Link href="/">Go back</Link></div>
        </main>
    );
}

export function getStaticProps({ params: {} }) {
    const Data = {
        title: 'Other page',
        msg: 'This is static property sample'
    }
    return {
        props: {
            data: Data  // ここのキーの data は、上の関数の引数として使用される
        }
    };
}
