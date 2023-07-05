import Head from "next/head"
import Avatar from "../components/Avatar"
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Footer from "../components/Footer"
import { useRef } from "react"
import { useRouter} from "next/router"

export default function Home() {

  const searchInputRef = useRef(null)
  const router = useRouter()
  const search = (e) =>{
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;

    router.push(`/search?term=${term}`)

  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google-2.0</title>
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* <ViewGridIcon className="h-10 w-10 p-2" /> */}
          <Avatar url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" />
        </div>
      </header >
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5" >
        <Image
          src=''
          width={300}
          height={100}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-3 py-5 items-center sm:max-w-xl lg:max-w-2xl">
          <p>0\</p>
          <input ref={searchInputRef} type="text" className=" flex-grow focus:outline-none" />
         <p>^</p>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="button">
            Google Search
          </button>
          <button onClick={search} className="button">
            I'm feeling lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  )
}