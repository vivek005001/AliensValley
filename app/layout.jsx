import '@/assets/styles/global.css'
import Navbar from '@/components/Navbar'
import AuthProvider from '@/components/AuthProvider'


export const metadata = {
  tittle: 'Aliens Valley | The best lowers and shirts in the galaxy',
  description: 'Aliens Valley is the best place to find the best lowers and shirts in the galaxy',
  keywords: 'aliens, valley, lowers, shirts, galaxy'
}

const Mainlayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <Navbar />
          <div>{children}</div>
        </body>
      </html>
    </AuthProvider>
  )
}

export default Mainlayout