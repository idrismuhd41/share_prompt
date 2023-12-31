import Nav from '@components/Nav'
import '@styles/globals.css'
import Provider from '@components/Provider'
import Footer from '@components/Footer'


export const metadata = {
  title: "Promt Share",
  description: 'Discover & Share AI Prompt',
}
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout