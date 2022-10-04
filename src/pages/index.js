import Head from "next/head";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen grid content-center">
        <h1 className="text-8xl font-bold text-gray-50 text-center w-3/4 mx-auto">
          let's create something amazing together
        </h1>
        <h5 className="text-2xl font-mono font-extralight text-gray-400 text-center mt-10 w-2/4 mx-auto">
          Dileepa Chandima, a full stack developer based on Sri Lanka, who
          passionate about problem solving and thinking out of teh box
        </h5>
      </main>
    </div>
  );
}
