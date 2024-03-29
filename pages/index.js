import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={`${styles.logo}`}>
          <Image src="/images/twitterLogo.png" alt="XLogo" width={500} height={500}/>
        </div>

        <div className={`${styles.body}`}>
          <h1 className={`${styles.h1}`}> Happening now</h1>
            <br/>
            <br/>
            <br/>
          <h2 className={`${styles.h2}`}> Join today.</h2>
            <br/>

          <button className={`${styles.googlebutton}`}>
          <Image className={`${styles.googlelogo}`} src="/images/googleLogo.png" alt="GLogo" width={25} height={20} />
          Sign in with Google
          </button>

            <br/>

          <button className={`${styles.applebutton}`}>
          <Image className={`${styles.googlelogo}`} src="/images/appleLogo.png" alt="ALogo" width={25} height={20} />
          Sign in with Apple
          </button>
            <br/>
          <p className={`${styles.or}`}> ________________ or ________________ </p>
            <br/>
          <button className={`${styles.createbutton}`}> Create Account </button>
            <br/>
          <p className={`${styles.terms}`}>By signing up, you agree to the Terms of Service <br/> and Privacy Policy, including Cookie Use.</p>
          <br></br>
          <h3 className={`${styles.h3}`}> Already have an account</h3>
          <br/>
          <button className={`${styles.signbutton}`}> Sign in </button>

        </div>


      </main>
    </>

  )

}

 