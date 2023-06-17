import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";
import {useState} from "react";
import Logo from "@/components/Logo";
import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';

export default function Layout({children}) {
  const [showNav,setShowNav] = useState(false);
  const { data: session } = useSession();
  if (!session) {
    return (
      // <div className="bg-bgGray w-screen h-screen flex items-center">
      //   <div className="text-center w-full mb-5">
      //     <button onClick={() => signIn('google')} >Login with Google</button>
      //   </div>
      //   <div className="text-center w-full"> 
      //     <button onClick={() => signIn('github')} className="bg-white p-2 px-4 rounded-lg">Login with Github</button>
      //   </div>
      // </div>
      <div className="flex flex-row items-center gap-4 mt-8 justify-center">
      <div
      className="bg-white p-2 px-4 rounded-lg"
                            onClick={()=>signIn('google')}
                            >
                                <FcGoogle size={30}/>Login with Gogle
                            </div>
                            <div 
                            className="bg-white p-2 px-4 rounded-lg"
                            onClick={()=>signIn('github')}
                            >
                                <FaGithub size={30}/>Login with Github
                            </div>
                        </div>
    );
  }

  return (
    <div className="bg-bgGray min-h-screen ">
      <div className=" md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4">
          {children}
        </div>
      </div>
    </div>
  );
}