import { Roboto } from 'next/font/google'
import '../src/app/globals.scss';
import Menu from '@/app/components/Menu';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Menu /> 
      <Component {...pageProps} />
    </main>
  )
}