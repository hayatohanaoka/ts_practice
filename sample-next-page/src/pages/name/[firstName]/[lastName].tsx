import Link from "next/link";
import { useRouter } from "next/router"

interface UrlParamProps {
  firstName: 'tanaka' | 'saito' | 'ito',
  lastName: 'tanaka' | 'saito' | 'ito'
}

export function getServerSideProps({ params }: {params: UrlParamProps}) {
  const data = {
    tanaka: {
      title: "Tanaka's site",
      msg: "My name is Tanaka"
    },
    saito: {
      title: "Saito's site",
      msg: "My name is Saito"
    },
    ito: {
      title: "Ito's site",
      msg: "My name is Ito"
    }
  }

  if (data[params.lastName]) {
    return {
      props: {
        data: data[params.lastName]
      }
    }
  } else {
    return {
      props: {
        data: {
          title: "Not Found", msg: "Not Found"
        }
      }
    }
  }
}

interface PageProps {
  data: {
    title: string,
    msg: string
  }
}

export default function Home({ data }: PageProps ) {
  const router = useRouter();
  return (
    <main>
      <h1>{data.title}</h1>
      <p>This is multi param page</p>
      <ol>
        <li>Your first name: <b>&quot;{router.query.firstName}&quot;</b>.</li>
        <li>Your last name: <b>&quot;{router.query.lastName}&quot;</b>.</li>
        <li>{data.msg}</li>
      </ol>
      <Link href="/other">Go to other page</Link>
    </main>
  );
}
