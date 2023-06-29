'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders()
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      <Link href="/" className="flex gap-2 flex-center ">
        <Image
          src='/assets/images/logo-imt2.png'
          alt="Promtopia logo"
          height={40}
          width={40}
          className="object-contain rounded-full"
        />
        <p className="logo_text"> Prompt Share</p>
      </Link>



      {/* Desktop Navigation */}

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="blue_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Signout
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                alt="profile picture"
                className="rounded-full"
                height={37}
                width={37}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="blue_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* MObile Navigation */}

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              alt="profile picture"
              height={37}
              width={37}
              className="rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href='/profile'
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/creare-prompt'
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full blue_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id
                  )}
                  className="blue_btn"
                >
                  Sign In
                </button>
              ))}

          </>
        )}
      </div>
    </nav>
  );
};

export default Nav