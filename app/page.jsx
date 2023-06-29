import Feed from "@components/Feed"


function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Dicover & Share
        <br className="max-md:hidden" />
        <p className="blue_gradient text-center">AI-Powered Prompts</p>
      </h1>
      <p className="desc text-center">Prompt Share is an open-source AI prompting tool for modern world to discover, create and share creative propmpts</p>

      <Feed />

    </section>
  )
}

export default Home